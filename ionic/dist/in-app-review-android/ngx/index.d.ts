import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Google Play In App Review Android Plugin
 * @description
 * This plugin helps to integrate Google Play In App Review with Cordova Applications
 *
 */
export declare class InAppReviewAndroid extends IonicNativePlugin {
    /**
     * This will initiate the Google Play In App Review
     *
     * @return {Promise<InAppReviewResponse>} Returns a promise that resolves task and flow gets completed, rejects on failure of task completion/
     */
    initGooglePlayReview(): Promise<InAppReviewResponse>;
}
export interface InAppReviewResponse {
    taskComplete: boolean;
    flowComplete: boolean;
}
