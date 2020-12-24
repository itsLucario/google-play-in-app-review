package dev.nandan.plugin;

import android.util.Log;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.google.android.play.core.review.ReviewInfo;
import com.google.android.play.core.review.ReviewManager;
import com.google.android.play.core.review.ReviewManagerFactory;
import com.google.android.play.core.tasks.Task;


public class InAppReviewAndroid extends CordovaPlugin {
    public static final String TAG = "InAppReviewPlugin";
    private ReviewManager reviewManager;
    
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("initGooglePlayReview")) {
            this.initReviewFlow(callbackContext);
            return true;
        }
        return false;
    }

    private void  initReviewFlow(CallbackContext callbackContext) {
        reviewManager = ReviewManagerFactory.create(cordova.getActivity());
        Task<ReviewInfo> request = reviewManager.requestReviewFlow();
        JSONObject result = new JSONObject();

        request.addOnCompleteListener(task -> {
            if (task.isSuccessful()) {
                result.put("taskComplete", true);
                ReviewInfo reviewInfo = task.getResult();
                Task<Void> flow = reviewManager.launchReviewFlow(cordova.getActivity(), reviewInfo);

                flow.addOnCompleteListener(task1 -> {
                    result.put("flowComplete", true);
                    callbackContext.success(result);
                });
            } else {
                Log.i(TAG, "Task Unsuccessful");
                result.put("taskComplete", false);
                result.put("flowComplete", false);
                callbackContext.error(result);
            }
        });
    }
}
