function updateShipping() {

        if (nlapiGetContext().getExecutionContext() != 'webstore') {
            return true;
        }
        var currentCost = nlapiGetFieldValue('shippingcost');
        var costToSet = nlapiGetFieldValue('custbody_pacejet_freight_price');
        nlapiLogExecution('DEBUG','currentCost', currentCost);
        nlapiLogExecution('DEBUG','costToSet', costToSet);
    
        if (costToSet && costToSet != currentCost) {
            nlapiSetFieldValue('custbody_pacejet_freight_price', '', true, true);
            nlapiSetFieldValue('shippingcost', costToSet, true, true);
        }
}
// var nsps_order_shipping = new function () {
//
//     this.updateShipping = function () {
//         nlapiLogExecution('DEBUG','Test');
//         if (nlapiGetContext().getExecutionContext() != 'webstore') {
//             return true;
//         }
//         var currentCost = nlapiGetFieldValue('shippingcost');
//         var costToSet = nlapiGetFieldValue('custbody_ns_ps_shipping_price');
//
//         if (costToSet && costToSet != currentCost) {
//             nlapiSetFieldValue('custbody_ns_ps_shipping_price', '', true, true);
//             nlapiSetFieldValue('shippingcost', costToSet, true, true);
//         }
//     };
//
//     var self = this;
//     return {
//         change: function() {
//             self.updateShipping();
//         }
//     }
// };