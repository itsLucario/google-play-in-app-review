var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var InAppReviewAndroidOriginal = /** @class */ (function (_super) {
    __extends(InAppReviewAndroidOriginal, _super);
    function InAppReviewAndroidOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReviewAndroidOriginal.prototype.initGooglePlayReview = function () { return cordova(this, "initGooglePlayReview", {}, arguments); };
    InAppReviewAndroidOriginal.pluginName = "InAppReviewAndroid";
    InAppReviewAndroidOriginal.plugin = "cordova-plugin-in-app-review-android";
    InAppReviewAndroidOriginal.pluginRef = "cordova.plugins.InAppReviewAndroid";
    InAppReviewAndroidOriginal.repo = "";
    InAppReviewAndroidOriginal.installVariables = [];
    InAppReviewAndroidOriginal.platforms = ["Android"];
    return InAppReviewAndroidOriginal;
}(IonicNativePlugin));
var InAppReviewAndroid = new InAppReviewAndroidOriginal();
export { InAppReviewAndroid };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2luLWFwcC1yZXZpZXctYW5kcm9pZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQmhDLHNDQUFpQjs7OztJQVF2RCxpREFBb0I7Ozs7Ozs7NkJBMUJ0QjtFQWtCd0MsaUJBQWlCO1NBQTVDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIEdvb2dsZSBQbGF5IEluIEFwcCBSZXZpZXcgQW5kcm9pZCBQbHVnaW5cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gaGVscHMgdG8gaW50ZWdyYXRlIEdvb2dsZSBQbGF5IEluIEFwcCBSZXZpZXcgd2l0aCBDb3Jkb3ZhIEFwcGxpY2F0aW9uc1xuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdJbkFwcFJldmlld0FuZHJvaWQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pbi1hcHAtcmV2aWV3LWFuZHJvaWQnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkluQXBwUmV2aWV3QW5kcm9pZCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJycsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluQXBwUmV2aWV3QW5kcm9pZCBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogVGhpcyB3aWxsIGluaXRpYXRlIHRoZSBHb29nbGUgUGxheSBJbiBBcHAgUmV2aWV3IFxuICAgKiBcbiAgICogQHJldHVybiB7UHJvbWlzZTxJbkFwcFJldmlld1Jlc3BvbnNlPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0YXNrIGFuZCBmbG93IGdldHMgY29tcGxldGVkLCByZWplY3RzIG9uIGZhaWx1cmUgb2YgdGFzayBjb21wbGV0aW9uL1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbml0R29vZ2xlUGxheVJldmlldygpOiBQcm9taXNlPEluQXBwUmV2aWV3UmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEluQXBwUmV2aWV3UmVzcG9uc2Uge1xuICB0YXNrQ29tcGxldGU6IGJvb2xlYW4sXG4gIGZsb3dDb21wbGV0ZTogYm9vbGVhblxufSJdfQ==