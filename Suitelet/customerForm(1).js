/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */
define(
    ['N/file', 'N/record', 'N/ui/serverWidget', 'N/redirect','N/runtime','N/format'],
    /**
     * @param {file} file
     * @param {record} record
     * @param {search} search
     * @param {transaction} transaction
     * @param {serverWidget} serverWidget
     */
    function (file, record, serverWidget, redirect,runtime,format) {

        /**
         * Definition of the Suitelet script trigger point.
         *
         * @param {Object} context
         * @param {ServerRequest} context.request - Encapsulation of the incoming request
         * @param {ServerResponse} context.response - Encapsulation of the Suitelet response
         * @Since 2015.2
         */
        function onRequest(context) {
            if (context.request.method === 'GET') {
                context.response.writePage({
                    pageObject: xferOrderForm(context)
                });
             
            } else {
              var userObj = runtime.getCurrentUser();
				log.debug("Name of current user: " + userObj.name);
                var request = context.request;
                var params = request.parameters;
                var customerNumber = params.custpage_customer_no;
                log.debug({title:'Customer', details:customerNumber });
                var correctaclsNumber = params.custpage_customer_no_corrected;
                log.debug({title:'correctaclsNumber', details:correctaclsNumber });
                var franchiseName = params.custpage_customer_no;
                log.debug({title:'franchiseName', details:franchiseName });
                var territoryName = params.custpage_franchise_location;
                log.debug({title:'territoryName', details: territoryName});
                var franchiseLocationName = params.custpage_franchise_number;
                log.debug({title:'franchiseLocationName', details:customerNumber });
                var firstName = params.custpage_first_name;
                log.debug({title:'firstName', details:firstName });
                var lastName = params.custpage_last_name;
                log.debug({title:'lastName', details:lastName });
                var email = params.custpage_franchise_email;
                log.debug({title:'email', details:email });
                var phone = params.custpage_franchise_phone_number;
                log.debug({title:'phone', details:phone });
                var marketingexpensesresidential = params.custpage_web_a2;
                log.debug({title:'marketingexpensesresidential', details:marketingexpensesresidential });
                var marketingexpensescommercial= params.custpage_reach_a3;
                log.debug({title:'marketingexpensescommercial', details:marketingexpensescommercial });
                var totalmarketingexpenses = Number(marketingexpensesresidential) + Number(marketingexpensescommercial);
                log.debug({title:'totalmarketingexpenses', details:totalmarketingexpenses });

try{
                var nrsfliersdidntuse = params.custpage_web_que1;
                log.debug({title:'nrsfliersdidntuse', details:nrsfliersdidntuse });
                var nrsfliersnoofcalls = params.custpage_num_calls1;
                log.debug({title:'nrsfliersnoofcalls', details:nrsfliersnoofcalls });
                var nrsfliersnoofappts = params.custpage_num_appts1;
                log.debug({title:'nrsfliersnoofappts', details:nrsfliersnoofappts });
                var nrsfliersnoofsales = params.custpage_num_sales1;
                log.debug({title:'nrsfliersnoofsales', details:nrsfliersnoofsales });
                var nrsfliersreachqty = params.custpage_reach_qtyd1;
                log.debug({title:'nrsfliersreachqty', details:nrsfliersreachqty });

                var dmfliersdidntuse = params.custpage_web_que21;
                log.debug({title:'dmfliersdidntuse', details:dmfliersdidntuse });
                var dmfliersreachqty = params.custpage_reach_qtyd2;
                log.debug({title:'dmfliersreachqty', details:dmfliersreachqty });
                var dmfliersnoofcalls = params.custpage_num_calls2;
                log.debug({title:'dmfliersnoofcalls', details:dmfliersnoofcalls });
                var dmfliersnoofappts = params.custpage_num_appts2;
                log.debug({title:'dmfliersnoofappts', details:dmfliersnoofappts });
                var dmfliersnoofsales = params.custpage_num_sales2;
                log.debug({title:'dmfliersnoofsales', details:dmfliersnoofsales });
                

               var  prfliersdidntuse = params.custpage_web_que31;
                log.debug({title:'prfliersdidntuse', details:prfliersdidntuse });
                var prfliersreachqty = params.custpage_reach_qtyd3;
                log.debug({title:'prfliersreachqty', details:prfliersreachqty });
                var prfliersnoofcalls = params.custpage_num_calls3;
                log.debug({title:'prfliersnoofcalls', details:prfliersnoofcalls });
                var prfliersnoofappts = params.custpage_num_appts3;
                log.debug({title:'prfliersnoofappts', details:prfliersnoofappts });
                var prfliersnoofsales = params.custpage_num_sales3;
                log.debug({title:'prfliersnoofsales', details:prfliersnoofsales });


                var reffliersdidntuse = params.custpage_web_que41;
                log.debug({title:'reffliersdidntuse', details:reffliersdidntuse });
                var reffliersreachqty = params.custpage_reach_qtyd4;
                log.debug({title:'reffliersreachqty', details:reffliersreachqty });
                var reffliersnoofcalls = params.custpage_num_calls4;
                log.debug({title:'reffliersnoofcalls', details:reffliersnoofcalls });
                var reffliersnoofappts = params.custpage_num_appts4;
                log.debug({title:'reffliersnoofappts', details:reffliersnoofappts });
                var reffliersnoofsales = params.custpage_num_sales4;
                log.debug({title:'reffliersnoofsales', details:reffliersnoofsales });


                var cdcwfliersdidntuse = params.custpage_web_que51;
                log.debug({title:'cdcwfliersdidntuse', details:cdcwfliersdidntuse });
                var cdcwfliersreachqty = params.custpage_reach_qtyd5;
                log.debug({title:'cdcwfliersreachqty', details:cdcwfliersreachqty });
                var cdcwfliersnoofcalls = params.custpage_num_calls5;
                log.debug({title:'cdcwfliersnoofcalls', details:cdcwfliersnoofcalls });
                var cdcwfliersnoofappts = params.custpage_num_appts5;
                log.debug({title:'cdcwfliersnoofappts', details:cdcwfliersnoofappts });
                var cdcwfliersnoofsales = params.custpage_num_sales5;
                log.debug({title:'cdcwfliersnoofsales', details:cdcwfliersnoofsales });


                var fwfliersdidntuse = params.custpage_web_que61;
                log.debug({title:'fwfliersdidntuse', details:fwfliersdidntuse });
                var fwfliersreachqty = params.custpage_reach_qtyd6;
                log.debug({title:'fwfliersreachqty', details:fwfliersreachqty });
                var fwfliersnoofcalls = params.custpage_num_calls6;
                log.debug({title:'fwfliersnoofcalls', details:fwfliersnoofcalls });
                var fwfliersnoofappts = params.custpage_num_appts6;
                log.debug({title:'fwfliersnoofappts', details:fwfliersnoofappts });
                var fwfliersnoofsales = params.custpage_num_sales6;
                log.debug({title:'fwfliersnoofsales', details:fwfliersnoofsales });


                var smfliersdidntuse = params.custpage_web_que71;
                log.debug({title:'smfliersdidntuse', details:smfliersdidntuse });
                var smfliersreachqty = params.custpage_reach_qtyd7;
                log.debug({title:'smfliersreachqty', details:smfliersreachqty });
                var smfliersnoofcalls = params.custpage_num_calls7;
                log.debug({title:'smfliersnoofcalls', details:smfliersnoofcalls });
                var smfliersnoofappts = params.custpage_num_appts7;
                log.debug({title:'smfliersnoofappts', details:smfliersnoofappts });
                var smfliersnoofsales = params.custpage_num_sales7;
                log.debug({title:'smfliersnoofsales', details:smfliersnoofsales });


                var bmfliersdidntuse = params.custpage_web_que81;
                log.debug({title:'bmfliersdidntuse', details:bmfliersdidntuse });
                var bmfliersreachqty = params.custpage_reach_qtyd8;
                log.debug({title:'bmfliersreachqty', details:bmfliersreachqty });
                var bmfliersnoofcalls = params.custpage_num_calls8;
                log.debug({title:'bmfliersnoofcalls', details:bmfliersnoofcalls });
                var bmfliersnoofappts = params.custpage_num_appts8;
                log.debug({title:'bmfliersnoofappts', details:bmfliersnoofappts });
                var bmfliersnoofsales = params.custpage_num_sales8;
                log.debug({title:'bmfliersnoofsales', details:bmfliersnoofsales });


                var lpmfliersdidntuse = params.custpage_web_que91;
                log.debug({title:'lpmfliersdidntuse', details:lpmfliersdidntuse });
                var lpmfliersreachqty = params.custpage_reach_qtyd9;
                log.debug({title:'lpmfliersreachqty', details:lpmfliersreachqty });
                var lpmfliersnoofcalls = params.custpage_num_calls9;
                log.debug({title:'lpmfliersnoofcalls', details:lpmfliersnoofcalls });
                var lpmfliersnoofappts = params.custpage_num_appts9;
                log.debug({title:'lpmfliersnoofappts', details:lpmfliersnoofappts });
                var lpmfliersnoofsales = params.custpage_num_sales9;
                log.debug({title:'lpmfliersnoofsales', details:lpmfliersnoofsales });

                
                
                var otfliersdidntuse = params.custpage_web_que101;
                log.debug({title:'otfliersdidntuse', details:otfliersdidntuse });
                var otfliersreachqty = params.custpage_reach_qtyd10;
                log.debug({title:'otfliersreachqty', details:otfliersreachqty });
                var otfliersnoofcalls = params.custpage_num_calls10;
                log.debug({title:'otfliersnoofcalls', details:otfliersnoofcalls });
                var otfliersnoofappts = params.custpage_num_appts10;
                log.debug({title:'otfliersnoofappts', details:otfliersnoofappts });
                var otfliersnoofsales = params.custpage_num_sales10;
                log.debug({title:'otfliersnoofsales', details:otfliersnoofsales });

                var otresmktng = params.custpage_res_marketing;
                log.debug({title:'otresmktng', details:otresmktng });

                //var newresappthisseason = params.custpage_new_res;

                var newresappthisseason = Number(nrsfliersnoofappts)+Number(dmfliersnoofappts)+Number(prfliersnoofappts)+Number(reffliersnoofappts)+Number(cdcwfliersnoofappts)+
                Number(fwfliersnoofappts)+Number(smfliersnoofappts)+Number(bmfliersnoofappts)+Number(lpmfliersnoofappts)+Number(otfliersnoofappts);
                log.debug({title:'newresappthisseason', details:newresappthisseason });

                var newressalesthisseason = Number(nrsfliersnoofsales)+Number(dmfliersnoofsales)+Number(prfliersnoofsales)+Number(reffliersnoofsales)+Number(cdcwfliersnoofsales)+Number(fwfliersnoofsales)+Number(smfliersnoofsales)+
                Number(bmfliersnoofsales)+Number(lpmfliersnoofsales)+Number(otfliersnoofsales);
                log.debug({title:'newressalesthisseason', details:newressalesthisseason });

                var dedicatedmktng = params.custpage_dedicated1;
                log.debug({title:'dedicatedmktng', details:dedicatedmktng });


                var ncsdmdidntuse = params.custpage_web_que1a;
                log.debug({title:'ncsdmdidntuse', details:ncsdmdidntuse });
                var ncsdmreachqty = params.custpage_reach_qtyd1a;
                log.debug({title:'ncsdmreachqty', details:ncsdmreachqty });
                var ncsdmnoofcalls = params.custpage_num_calls1a;
                log.debug({title:'ncsdmnoofcalls', details:ncsdmnoofcalls });
                var ncsdmnoofappts = params.custpage_num_appts1a;
                log.debug({title:'ncsdmnoofappts', details:ncsdmnoofappts });
                var ncsdmnoofsales = params.custpage_num_sales1a;
                log.debug({title:'ncsdmnoofsales', details:ncsdmnoofsales });


                var ncsccdidntuse = params.custpage_web_que21a;
                log.debug({title:'ncsccdidntuse', details:ncsccdidntuse });
                var ncsccreachqty = params.custpage_reach_qtyd2a;
                log.debug({title:'ncsccreachqty', details:ncsccreachqty });
                var ncsccnoofcalls = params.custpage_num_calls2a;
                log.debug({title:'ncsccnoofcalls', details:ncsccnoofcalls });
                var ncsccnoofappts = params.custpage_num_appts2a;
                log.debug({title:'ncsccnoofappts', details:ncsccnoofappts });
                var ncsccnoofsales = params.custpage_num_sales2a;
                log.debug({title:'ncsccnoofsales', details:ncsccnoofsales });


                var ncsrfdidntuse = params.custpage_web_que31a;
                log.debug({title:'ncsrfdidntuse', details:ncsrfdidntuse });
                var ncsrfreachqty = params.custpage_reach_qtyd3a;
                log.debug({title:'ncsrfreachqty', details:ncsrfreachqty });
                var ncsrfnoofcalls = params.custpage_num_calls3a;
                log.debug({title:'ncsrfnoofcalls', details:ncsrfnoofcalls });
                var ncsrfnoofappts = params.custpage_num_appts3a;
                log.debug({title:'ncsrfnoofappts', details:ncsrfnoofappts });
                var ncsrfnoofsales = params.custpage_num_sales3a;
                log.debug({title:'ncsrfnoofsales', details:ncsrfnoofsales });


                var ncscddidntuse = params.custpage_web_que41a;
                log.debug({title:'ncscddidntuse', details:ncscddidntuse });
                var ncscdreachqty = params.custpage_reach_qtyd4a;
                log.debug({title:'ncscdreachqty', details:ncscdreachqty });
                var ncscdnoofcalls = params.custpage_num_calls4a;
                log.debug({title:'ncscdnoofcalls', details:ncscdnoofcalls });
                var ncscdnoofappts = params.custpage_num_appts4a;
                log.debug({title:'ncscdnoofappts', details:ncscdnoofappts });
                var ncscdnoofsales = params.custpage_num_sales4a;
                log.debug({title:'ncscdnoofsales', details:ncscdnoofsales });


                var ncsfwdidntuse = params.custpage_web_que51a;
                log.debug({title:'ncsfwdidntuse', details:ncsfwdidntuse });
                var ncsfwreachqty = params.custpage_reach_qtyd5a;
                log.debug({title:'ncsfwreachqty', details:ncsfwreachqty });
                var ncsfwnoofcalls = params.custpage_num_calls5a;
                log.debug({title:'ncsfwnoofcalls', details:ncsfwnoofcalls });
                var ncsfwnoofappts = params.custpage_num_appts5a;
                log.debug({title:'ncsfwnoofappts', details:ncsfwnoofappts });
                var ncsfwnoofsales = params.custpage_num_sales5a;
                log.debug({title:'ncsfwnoofsales', details:ncsfwnoofsales });


                var ncssmdidntuse = params.custpage_web_que61a;
                log.debug({title:'ncssmdidntuse', details:ncssmdidntuse });
                var ncssmreachqty = params.custpage_reach_qtyd6a;
                log.debug({title:'ncssmreachqty', details:ncssmreachqty });
                var ncssmnoofcalls = params.custpage_num_calls6a;
                log.debug({title:'ncssmnoofcalls', details:ncssmnoofcalls });
                var ncssmnoofappts = params.custpage_num_appts6a;
                log.debug({title:'ncssmnoofappts', details:ncssmnoofappts });
                var ncssmnoofsales = params.custpage_num_sales6a;
                log.debug({title:'ncssmnoofsales', details:ncssmnoofsales });


                var ncsbmdidntuse = params.custpage_web_que71a;
                log.debug({title:'ncsbmdidntuse', details:ncsbmdidntuse });
                var ncsbmreachqty = params.custpage_reach_qtyd7a;
                log.debug({title:'ncsbmreachqty', details:ncsbmreachqty });
                var ncsbmnoofcalls = params.custpage_num_calls7a;
                log.debug({title:'ncsbmnoofcalls', details:ncsbmnoofcalls });
                var ncsbmnoofappts = params.custpage_num_appts7a;
                log.debug({title:'ncsbmnoofappts', details:ncsbmnoofappts });
                var ncsbmnoofsales = params.custpage_num_sales7a;
                log.debug({title:'ncsbmnoofsales', details:ncsbmnoofsales });


                var ncslpmdidntuse = params.custpage_web_que81a;
                log.debug({title:'ncslpmdidntuse', details:ncslpmdidntuse });
                var ncslpmreachqty = params.custpage_reach_qtyd8a;
                log.debug({title:'ncslpmreachqty', details:ncslpmreachqty });
                var ncslpmnoofcalls = params.custpage_num_calls8a;
                log.debug({title:'ncslpmnoofcalls', details:ncslpmnoofcalls });
                var ncslpmnoofappts = params.custpage_num_appts8a;
                log.debug({title:'ncslpmnoofappts', details:ncslpmnoofappts });
                var ncslpmnoofsales = params.custpage_num_sales8a;
                log.debug({title:'ncslpmnoofsales', details:ncslpmnoofsales });



                var ncsotdidntuse = params.custpage_web_que91a;
                log.debug({title:'ncsotdidntuse', details:ncsotdidntuse });
                var ncsotreachqty = params.custpage_reach_qtyd9a;
                log.debug({title:'ncsotreachqty', details:ncsotreachqty });
                var ncsotnoofcalls = params.custpage_num_calls9a;
                log.debug({title:'ncsotnoofcalls', details:ncsotnoofcalls });
                var ncsotnoofappts = params.custpage_num_appts9a;
                log.debug({title:'ncsotnoofappts', details:ncsotnoofappts });
                var ncsotnoofsales = params.custpage_num_sales9a;
                log.debug({title:'ncsotnoofsales', details:ncsotnoofsales });


                var otmktifused = params.custpage_res_marketing_b;
                log.debug({title:'otmktifused', details:otmktifused });

                var totalnwcommthisseason = Number(ncsdmnoofappts)+Number(ncsccnoofappts)+Number(ncsrfnoofappts)+Number(ncscdnoofappts)+Number(ncsfwnoofappts)+Number(ncssmnoofappts)+Number(ncsbmnoofappts)+Number(ncslpmnoofappts)+Number(ncsotnoofappts);
                log.debug({title:'totalnwcommthisseason', details:totalnwcommthisseason });
                
                var totalnwcommsalesthisseason = Number(ncsdmnoofsales)+Number(ncsccnoofsales)+Number(ncsrfnoofsales)+Number(ncscdnoofsales)+Number(ncsfwnoofsales)+Number(ncssmnoofsales)+Number(ncsbmnoofsales)+Number(ncslpmnoofsales)+Number(ncsotnoofsales);
                log.debug({title:'totalnwcommsalesthisseason', details:totalnwcommsalesthisseason });
              
              var custlastresrensales = params.custpage_web_que1b;
                log.debug({title:'custlastresrensales', details:custlastresrensales });

                var custlastcommrensales = params.custpage_reach_qtyd1b;
                log.debug({title:'custlastcommrensales', details:custlastcommrensales });
               
                var custlastresrenattempts = params.custpage_web_que1c;
                log.debug({title:'custlastresrenattempts', details:custlastresrenattempts });

                var custlastcommrenttempts = params.custpage_reach_qtyd1c;
                log.debug({title:'custlastcommrenttempts', details:custlastcommrenttempts });

                var custresrenewed = params.custpage_web_que1d;
                log.debug({title:'custresrenewed', details:custresrenewed });

                var custlastcommenewed  = params.custpage_reach_qtyd1d;
                log.debug({title:'custlastcommenewed', details:custlastcommenewed });

               var rensalrestrenpct = Number(custlastresrensales)+Number(custlastresrenattempts)+Number(custresrenewed);
                log.debug({title:'rensalrestrenpct', details:rensalrestrenpct });

                var rensalcommtrenpct = Number(custlastcommrensales)+Number(custlastcommrenttempts)+Number(custlastcommenewed);
                log.debug({title:'rensalcommtrenpct', details:rensalcommtrenpct });

                var rensaltotrenpct = rensalrestrenpct+rensalcommtrenpct;
                log.debug({title:'rensaltotrenpct', details:rensaltotrenpct });

                var holdecweb = params.custpage_rdoproductrating;
                log.debug({title:'holdecweb', details:holdecweb });

                var afthrs = params.custpage_afterhours1;
                log.debug({title:'afthrs', details:afthrs });

                var mcnone = params.custpage_lmedia1;
                log.debug({title:'mcnone', details:mcnone });

                var mclocpaper = params.custpage_lmedia2;
                log.debug({title:'mclocpaper', details:mclocpaper });

                var mcloctv = params.custpage_lmedia3;
                log.debug({title:'mcloctv', details:mcloctv });

                var mclocpub = params.custpage_lmedia4;
                log.debug({title:'mclocpub', details:mclocpub });

                var mcnatmedia = params.custpage_lmedia5;
                log.debug({title:'mcnatmedia', details:mcnatmedia });

                var mcother = params.custpage_lmedia6;
                log.debug({title:'mcother', details:mcother });

                var mcotherfield = params.custpage_lmedia7;
                log.debug({title:'mcotherfield', details:mcotherfield });

                var clientloyal = params.custpage_loyalty1;
                log.debug({title:'clientloyal', details:clientloyal });
  				

                var clientloyalyes = params.custpage_pctdsct1;
                log.debug({title:'clientloyalyes', details:clientloyalyes });

                var decoflypgm = params.custpage_dec_fly_pgm1;
                log.debug({title:'decoflypgm', details:decoflypgm });

                var decoflypgmno = params.custpage__no_dec_fly_pgm1;
                log.debug({title:'decoflypgmno', details:decoflypgmno });

                var mkteffnseason = params.custpage_mkt_eff1;
                log.debug({title:'mkteffnseason', details:mkteffnseason });
                
                var elfdollar = params.custpage_elf_dlr1;
                log.debug({title:'elfdollar', details:elfdollar });
                
                var mktpgmimprov = params.custpage_improv;
                log.debug({title:'mktpgmimprov', details:mktpgmimprov });

                var ccriresnewsvccus = params.custpage_web_newsrv1;
                log.debug({title:'ccriresnewsvccus', details:ccriresnewsvccus });

                var ccriresnewsvcrev = params.custpage_web_newsrv2;
                log.debug({title:'ccriresnewsvcrev', details:ccriresnewsvcrev });

                var ccriresrensvccus = params.custpage_web_rrs1;
                log.debug({title:'ccriresrensvccus', details:ccriresrensvccus });

                var ccriresrensvcrev = params.custpage_reach_rrs2;
                log.debug({title:'ccriresrensvcrev', details:ccriresrensvcrev });

                var ccriresrennewowncus = params.custpage_web_newown1;
                log.debug({title:'ccriresrennewowncus', details:ccriresrennewowncus });

                var ccriresrennewownrev = params.custpage_web_newown2;
                log.debug({title:'ccriresrennewownrev', details:ccriresrennewownrev });

                var ccriresrenrenowncus = params.custpage_web_rennown1;
                log.debug({title:'ccriresrenrenowncus', details:ccriresrenrenowncus });

                var ccriresrenrenownrev = params.custpage_web_rennown2;
                log.debug({title:'ccriresrenrenownrev', details:ccriresrenrenownrev });
                
                var ccricommnewsvccus = params.custpage_web_comserv1;
                log.debug({title:'ccricommnewsvccus', details:ccricommnewsvccus });
                
                var ccricommnewsvcrev = params.custpage_web_comserv2;
                log.debug({title:'ccricommnewsvcrev', details:ccricommnewsvcrev });
                
                var ccricommrensvccus = params.custpage_web_comrserv1;
                log.debug({title:'ccricommrensvccus', details:ccricommrensvccus });
                
                var ccricommrensvcrev = params.custpage_web_comrserv2;
                log.debug({title:'ccricommrensvcrev', details:ccricommrensvcrev });

                var ccricommnewowncus = params.custpage_web_comnown1;
                log.debug({title:'ccricommnewowncus', details:ccricommnewowncus });

                var ccricommnewownrev = params.custpage_web_comnown2;
                log.debug({title:'ccricommnewownrev', details:ccricommnewownrev });

                var ccricommrenowncus = params.custpage_web_comrenown1;
                log.debug({title:'ccricommrenowncus', details:ccricommrenowncus });

                var ccricommrenownrev = params.custpage_web_comrenown2;
                log.debug({title:'ccricommrenownrev', details:ccricommrenownrev });

                var ccritotnewrev = Number(ccriresnewsvcrev)+Number(ccriresrennewownrev)+Number(ccricommnewsvcrev)+Number(ccricommnewownrev);
                log.debug({title:'ccritotnewrev', details:ccritotnewrev });

                var ccritotrenrev = Number(ccriresrensvcrev)+Number(ccriresrenrenownrev)+Number(ccricommrensvcrev)+Number(ccricommrenownrev);
                log.debug({title:'ccritotrenrev', details:ccritotrenrev });

                var ccritotalresrev = Number(ccriresnewsvcrev)+Number(ccriresrensvcrev)+Number(ccriresrenrenownrev)+Number(ccriresrennewownrev);
                log.debug({title:'ccritotalresrev', details:ccritotalresrev });

                var ccritotalcomrev = Number(ccricommnewsvcrev)+Number(ccricommrensvcrev)+Number(ccricommnewownrev)+Number(ccricommrenownrev);
                log.debug({title:'ccritotalcomrev', details:ccritotalcomrev });

                var ccritotalrev = Number(ccriresnewsvcrev)+Number(ccriresrensvcrev)+Number(ccriresrennewownrev)+Number(ccriresrenrenownrev)+Number(ccricommnewsvcrev)+Number(ccricommrensvcrev)+Number(ccricommnewownrev)+Number(ccricommrenownrev);
                log.debug({title:'ccritotalrev', details:ccritotalrev });

                var declinedsales = params.custpage_mkt_comobj1;
                log.debug({title:'declinedsales', details:declinedsales });

                var declinedsalesother = params.custpage_mkt_comobj2;
                log.debug({title:'declinedsalesother', details:declinedsalesother });

                var resrenstart = params.custpage_mkt_renres1;
                log.debug({title:'resrenstart', details:resrenstart });

                var pctrenpriorsept = params.custpage_mkt_custpct1;
                log.debug({title:'pctrenpriorsept', details:pctrenpriorsept });

                var instoffrencust = params.custpage_mkt_inspay1;
                log.debug({title:'instoffrencust', details:instoffrencust });

                var instoffrencustother = params.custpage_mkt_inspay12;
                log.debug({title:'instoffrencustother', details:instoffrencustother });

                var pctmultiyearcust = params.custpage_mkt_multiyear1;
                log.debug({title:'pctmultiyearcust', details:pctmultiyearcust });

                var lateseasonbusclse = params.custpage_close_bs1;
                log.debug({title:'lateseasonbusclse', details:lateseasonbusclse });

                var lateseasonbusclseother = params.custpage_close_bs8;
                log.debug({title:'lateseasonbusclseother', details:lateseasonbusclseother });
                
                
                var pctlateseasonbusclseother = params.custpage_close_pct1;
                log.debug({title:'pctlateseasonbusclseother', details:pctlateseasonbusclseother });

                var addoncustapproach = params.custpage_addon1;
                log.debug({title:'addoncustapproach', details:addoncustapproach });

                var addoncore = params.custpage_addon_prod1;
                log.debug({title:'addoncore', details:addoncore });

                var addongreene= params.custpage_addon_prod2;
                log.debug({title:'addongreene', details:addongreene });

                var addoncolor = params.custpage_addon_prod3;
                log.debug({title:'addoncolor', details:addoncolor });

                var addonform = params.custpage_addon_prod4;
                log.debug({title:'addonform', details:addonform });


                var addonillum = params.custpage_addon_prod5;
                log.debug({title:'addonillum', details:addonillum });

                var addonorna = params.custpage_addon_prod6;
                log.debug({title:'addonorna', details:addonorna });

                var addondisp = params.custpage_addon_prod7;
                log.debug({title:'addondisp', details:addondisp });

                var addonintree = params.custpage_addon_prod8;
                log.debug({title:'addonintree', details:addonintree });

                var pctresrendisp = params.custpage_item_add1;
                log.debug({title:'pctresrendisp', details:pctresrendisp });

                var newaddondollaravg = params.custpage_item_addon1;
                log.debug({title:'newaddondollaravg', details:newaddondollaravg });

                var totemppeaktime = params.custpage_total_emp1;
                log.debug({title:'totemppeaktime', details:totemppeaktime });

                var totchrisemppeaktime = params.custpage_christotal_emp1;
                log.debug({title:'totchrisemppeaktime', details:totchrisemppeaktime });

                var inscrewsize = params.custpage_instcrew1;
                log.debug({title:'inscrewsize', details:inscrewsize });

                var inscrewsizeinput = params.custpage_instcrew2;
                log.debug({title:'inscrewsizeinput', details:inscrewsizeinput });

                var manhrsprodseason = params.custpage_prod_emp_hours;
                log.debug({title:'manhrsprodseason', details:manhrsprodseason });

                var manhrsprodseasonrev = params.custpage_rev_man_hours;
                log.debug({title:'manhrsprodseasonrev', details:manhrsprodseasonrev });

                
                var adpnewrev = params.custpage_adp1;
                log.debug({title:'adpnewrev', details:adpnewrev });

                var adpnewproddays = params.custpage_adp2;
                log.debug({title:'adpnewproddays', details:adpnewproddays });

                var adpnoofcrew = params.custpage_adp3;
                log.debug({title:'adpnoofcrew', details:adpnoofcrew });

                var adprenrev = params.custpage_adp4;
                log.debug({title:'adprenrev', details:adprenrev });

                var adprenroddays = params.custpage_adp5;
                log.debug({title:'adprenroddays', details:adprenroddays });

                var adprennoofcrew = params.custpage_adp6;
                log.debug({title:'adprennoofcrew', details:adprennoofcrew });
                
                var adpnewjobs = (adpnewrev/adpnewproddays)/adpnoofcrew;
                log.debug({title:'adpnewjobs', details:adpnewjobs });
                

                var adprenewjobs =  (adprenrev/adprenroddays)/adprennoofcrew;
                log.debug({title:'adprenewjobs', details:adprenewjobs });

                var pctcoreitemampmod = params.custpage_amp_mod1;
                log.debug({title:'pctcoreitemampmod', details:pctcoreitemampmod });
                
                var pctcoreitemampmodother = params.custpage_amp_mod11;
                log.debug({title:'pctcoreitemampmodother', details:pctcoreitemampmodother });

                var cipfacial1 = params.custpage_led1;
                log.debug({title:'cipfacial1', details:cipfacial1 });

                var cipfacial2 = params.custpage_led2;
                log.debug({title:'cipfacial2', details:cipfacial2 });

                var cipwin1 = params.custpage_win1;
                log.debug({title:'cipwin1', details:cipwin1 });

                var cipwin2 = params.custpage_win2;
                log.debug({title:'cipwin2', details:cipwin2 });

                var shrubl1 = params.custpage_shrub1;
                log.debug({title:'shrubl1', details:shrubl1 });

                var shrubl2 = params.custpage_shrub2;
                log.debug({title:'shrubl2', details:shrubl2 });

                var treecan1 = params.custpage_treecan1;
                log.debug({title:'treecan1', details:treecan1 });

                var treecan2 = params.custpage_treecan2;
                log.debug({title:'treecan2', details:treecan2 });


                var treebran1 = params.custpage_treebran1;
                log.debug({title:'treebran1', details:treebran1 });

                var treebran2 = params.custpage_treebran2;
                log.debug({title:'treebran2', details:treebran2 });


                var treestak1 = params.custpage_treestk1;
                log.debug({title:'treestak1', details:treestak1 });

                var treestak2 = params.custpage_treestk2;
                log.debug({title:'treestak2', details:treestak2 });
                
                var gar1 = params.custpage_gar1;
                log.debug({title:'gar1', details:gar1 });

                var gar2 = params.custpage_gar2;
                log.debug({title:'gar2', details:gar2 });
                
                var wreath361 = params.custpage_wre361;
                log.debug({title:'wreath361', details:wreath361 });

                var wreath362 = params.custpage_wre362;
                log.debug({title:'wreath362', details:wreath362 });

                var wreath481 = params.custpage_wre481;
                log.debug({title:'wreath481', details:wreath481 });

                var wreath482 = params.custpage_wre481;
                log.debug({title:'wreath482', details:wreath482});

                var totallabcostseas = params.custpage_tot_lbr_cost;
                log.debug({title:'totallabcostseas', details:totallabcostseas});

                var totprodcost = params.custpage_prod_costs;
                log.debug({title:'totprodcost', details:totprodcost});

                var totsalescost = params.custpage_totsales;
                log.debug({title:'totsalescost', details:totsalescost});

                var totspleqcost = params.custpage_equ_rental;
                log.debug({title:'totspleqcost', details:totspleqcost});

                var totaddcosts = params.custpage_add_costs;
                log.debug({title:'totaddcosts', details:totaddcosts});

                var salesappuse = params.custpage_salesapp1;
                log.debug({title:'salesappuse', details:salesappuse});

                var salesapprate = params.custpage_salesapprate1;
                log.debug({title:'salesapprate', details:salesapprate});

                var incincomp = params.custpage_compinc1;
                log.debug({title:'incincomp', details:incincomp});

                var assistsales = params.custpage_imp_bus1;
                log.debug({title:'assistsales', details:assistsales});

                var assistmkt = params.custpage_imp_bus2;
                log.debug({title:'assistmkt', details:assistmkt});

                var assistins = params.custpage_imp_bus3;
                log.debug({title:'assistins', details:assistins});

                var assistprep= params.custpage_imp_bus4;
                log.debug({title:'assistprep', details:assistprep});

                var assistadmn = params.custpage_imp_bus5;
                log.debug({title:'assistadmn', details:assistadmn});

                var assisttech = params.custpage_imp_bus6;
                log.debug({title:'assisttech', details:assisttech});

                var assistcomm = params.custpage_imp_bus7;
                log.debug({title:'assistcomm', details:assistcomm});

                var assistspecitems = params.custpage_imp_bus8;
                log.debug({title:'assistspecitems', details:assistspecitems});

                var assistsalesothers = params.custpage_imp_bus9;
                log.debug({title:'assistsalesothers', details:assistsalesothers});

                var servicecommit1 = params.custpage_service1;
                log.debug({title:'servicecommit1', details:servicecommit1});

                var servicecommit2 = params.custpage_service2;
                log.debug({title:'servicecommit2', details:servicecommit2});

                var servicecommit3 = params.custpage_service3;
                log.debug({title:'servicecommit1', details:servicecommit3});

                var servicecommit4 = params.custpage_service4;
                log.debug({title:'servicecommit4', details:servicecommit4});

                var servicecommit5 = params.custpage_service5;
                log.debug({title:'servicecommit5', details:servicecommit5});

                var servicecommit6 = params.custpage_service6;
                log.debug({title:'servicecommit6', details:servicecommit6});

                var servicecommit7 = params.custpage_service7;
                log.debug({title:'servicecommit7', details:servicecommit7});

                var servicecommit8 = params.custpage_service8;
                log.debug({title:'servicecommit8', details:servicecommit8});


                var paymetnmethod = params.custpage_payment1;
                log.debug({title:'paymetnmethod', details:paymetnmethod});

                var paymetnmethodother = params.custpage_payment6;
                log.debug({title:'paymetnmethodother', details:paymetnmethodother});

               

                var rec = record.create({
                    type: 'customrecord_tdg_eoycommreporting',
                    isDynamic: true                       
                });
                
                
				var today = new Date();
   var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    today = mm+'/'+dd+'/'+yyyy;
  
  var  currDt = format.format({
                value: today,
                type: format.Type.DATE
            });
   log.debug({title:currDt, details:currDt });
                rec.setValue({fieldId:'custrecord104',value: '63378'});
                rec.setValue({fieldId:'custrecord107',value: 'Ly Wolfe'});
               // rec.setValue({fieldId:'cseg_franchiseseg',value: '21005'});
                rec.setValue({fieldId:'custrecord_tdg_franchisenumbereoy',value: '1234'});
                rec.setValue({fieldId:'custrecord106',value: 'Christmas'});
                //rec.setValue({fieldId:'custrecord105',value: currDt});
                rec.setValue({fieldId:'custrecord136',value: phone});
                rec.setValue({fieldId:'custrecord135',value: email});
  
  //Residential New
  //
  				rec.setValue({fieldId:'custrecord84',value: '63378'});
                rec.setValue({fieldId:'custrecord85',value: '111'});
                rec.setValue({fieldId:'custrecord88',value: '21005'});
                rec.setValue({fieldId:'custrecord89',value: '1234'});
  
  //Residential re install
  //
  				rec.setValue({fieldId:'custrecord92',value: '63378'});
                rec.setValue({fieldId:'custrecord93',value: '111'});
                rec.setValue({fieldId:'custrecord94',value: '21005'});
                rec.setValue({fieldId:'custrecord95',value: '1234'});
  
  rec.setValue({fieldId:'custrecord86',value: '63378'});
                rec.setValue({fieldId:'custrecord87',value: '111'});
                rec.setValue({fieldId:'custrecord90',value: '21005'});
                rec.setValue({fieldId:'custrecord91',value: '1234'});
  
  rec.setValue({fieldId:'custrecord96',value: '63378'});
                rec.setValue({fieldId:'custrecord97',value: '111'});
                rec.setValue({fieldId:'custrecord99',value: '21005'});
                rec.setValue({fieldId:'custrecord98',value: '1234'});
                
                
                // Marketing Info Sub Tab
  
         rec.setValue({fieldId:'custrecord_mark_resexp',value: marketingexpensesresidential});
  rec.setValue({fieldId:'custrecord_mark_commexp',value: marketingexpensescommercial});
  rec.setValue({fieldId:'custrecord_mark_totalexp',value: totalmarketingexpenses});
  
  
  //Marketing New Residential SubTab Fields
                //fliers
                rec.setValue({fieldId:'custrecord_mark_newres_fliers',value: nrsfliersdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newres_flierreach',value: nrsfliersreachqty});
                rec.setValue({fieldId:'custrecord_mark_newres_fliercalls',value: nrsfliersnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newres_flierappts',value: nrsfliersnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newres_fliersales',value: nrsfliersnoofsales});
                //dm
                rec.setValue({fieldId:'custrecord_mark_newres_dmail',value: dmfliersdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newres_dmailreach',value: dmfliersreachqty });
                rec.setValue({fieldId:'custrecord__mark_newres_dmailcalls',value: dmfliersnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newres_dmailappts',value: dmfliersnoofappts});
                rec.setValue({fieldId:'custrecord__mark_newres_dmailsales',value: dmfliersnoofsales });
                //purl
                rec.setValue({fieldId:'custrecord_mark_newres_purl',value: prfliersdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newres_purlreach',value: prfliersreachqty });
                rec.setValue({fieldId:'custrecord_mark_newres_purlcalls',value: prfliersnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newres_purlappts',value: prfliersnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newres_purlsales',value: prfliersnoofsales });
                //refferals
                rec.setValue({fieldId:'custrecord__mark_newres_ref',value: reffliersdidntuse});
                rec.setValue({fieldId:'custrecord__mark_newres_refreach',value: reffliersreachqty });
                rec.setValue({fieldId:'custrecord__mark_newres_refcalls',value: reffliersnoofcalls});
                rec.setValue({fieldId:'custrecord__mark_newres_refappts',value: reffliersnoofappts});
                rec.setValue({fieldId:'custrecord__mark_newres_refsales',value: reffliersnoofsales });
                //cdcw
                rec.setValue({fieldId:'custrecord__mark_newres_cdsite',value: cdcwfliersdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newres_cdsreach',value: cdcwfliersreachqty });
                rec.setValue({fieldId:'custrecord_mark_newres_refcalls',value: cdcwfliersnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newres_refappts',value: cdcwfliersnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newres_refsales',value: cdcwfliersnoofsales });
                //franchise
                rec.setValue({fieldId:'custrecord_mark_newres_frweb',value: fwfliersdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newres_frwebreach',value: fwfliersreachqty });
                rec.setValue({fieldId:'custrecord_mark_newres_frwebcalls',value: fwfliersnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newres_frwebappts',value: fwfliersnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newres_frwebsales',value: fwfliersnoofsales });
                //Social Media
                rec.setValue({fieldId:'custrecord_mark_newres_sm',value: smfliersdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newres_smreach',value: smfliersreachqty });
                rec.setValue({fieldId:'custrecord_mark_newres_smcalls',value: smfliersnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newres_smappts',value: smfliersnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newres_smsales',value: smfliersnoofsales });
                //broadcast media
                rec.setValue({fieldId:'custrecord_mark_newres_bm',value: bmfliersdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newres_bmreach',value: bmfliersreachqty });
                rec.setValue({fieldId:'custrecord_mark_newres_bmcalls',value: bmfliersnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newres_bmappts',value: bmfliersnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newres_bmsales',value: bmfliersnoofsales });
                // print media
                rec.setValue({fieldId:'custrecord_mark_newres_lm',value: lpmfliersdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newres_lmreach',value: lpmfliersreachqty });
                rec.setValue({fieldId:'custrecord_mark_newres_lmcalls',value: lpmfliersnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newres_lmappts',value: lpmfliersnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newres_lmsales',value: lpmfliersnoofsales });
                //other marketing
                rec.setValue({fieldId:'custrecord_mark_newres_om',value: otfliersdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newres_omreach',value: otfliersreachqty });
                rec.setValue({fieldId:'custrecord_mark_newres_omcalls',value: otfliersnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newres_omappts',value: otfliersnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newres_omsales',value: otfliersnoofsales });
                rec.setValue({fieldId:'custrecord_mark_newres_omdetail',value: otresmktng });

  
  				rec.setValue({fieldId:'custrecord_mark_newres_omdetail',value: otmktifused });

                rec.setValue({fieldId:'custrecord_mark_newres_total',value: newresappthisseason});

                rec.setValue({fieldId:'custrecord_mark_newres_totalsales',value: newressalesthisseason });
                //Commercial Marketing Subtab Fields
//              direct mail
                rec.setValue({fieldId:'custrecord_mark_newcom_dm',value: ncsdmdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newcom_dmreach',value: ncsdmreachqty });
                rec.setValue({fieldId:'custrecord_mark_newcom_dmcalls',value: ncsdmnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newcom_dmappts',value: ncsdmnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newcom_dmsales',value: ncsdmnoofsales });

                //Cold Call
                rec.setValue({fieldId:'custrecord_mark_newcom_cc',value: ncsccdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newcom_ccreach',value: ncsccreachqty });
                rec.setValue({fieldId:'custrecord_mark_newcom_cccalls',value: ncsccnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newcom_ccappts',value: ncsccnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newcom_ccsales',value: ncsccnoofsales });
                
                // referrals
                rec.setValue({fieldId:'custrecord_mark_newcom_cr',value: ncsrfdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newcom_crreach',value: ncsrfreachqty });
                rec.setValue({fieldId:'custrecord_mark_newcom_crappts',value: ncsrfnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newcom_crsales',value: ncsrfnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newcom_crcalls',value: ncsrfnoofsales });

                //COrp Website
                rec.setValue({fieldId:'custrecord_mark_newcom_cdsite',value: ncscddidntuse});
                rec.setValue({fieldId:'custrecord_mark_newcom_cdsitereach',value: ncscdreachqty });
                rec.setValue({fieldId:'custrecord_mark_newcom_cdsitecalls',value: ncscdnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newcom_cdsiteappts',value: ncscdnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newcom_cdsitesales',value: ncscdnoofsales });

                // Franchise Website
                rec.setValue({fieldId:'custrecord_mark_newcom_fw',value: ncsfwdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newcom_fwreach',value: ncsfwreachqty });
                rec.setValue({fieldId:'custrecord_mark_newcom_fwcalls',value: ncsfwnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newcom_fwappts',value: ncsfwnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newcom_fwsales',value: ncsfwnoofsales });

                // Social Media
                rec.setValue({fieldId:'custrecord_mark_newcom_smc',value: ncssmdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newcom_smcreach',value: ncssmreachqty });
                rec.setValue({fieldId:'custrecord_mark_newcom_smccalls',value: ncssmnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newcom_smcappts',value: ncssmnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newcom_smcsales',value: ncssmnoofsales });

                //broadcast media
                rec.setValue({fieldId:'custrecord_mark_newcom_bm',value: ncsbmdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newcom_bmreach',value: ncsbmreachqty });
                rec.setValue({fieldId:'custrecord_mark_newcom_bmcalls',value: ncsbmnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newcom_bmappts',value: ncsbmnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newcom_bmsales',value: ncsbmnoofsales });

                //Local print media
                rec.setValue({fieldId:'custrecord_mark_newcom_lm',value: ncslpmdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newcom_lmreach',value: ncslpmreachqty });
                rec.setValue({fieldId:'custrecord_mark_newcom_lmcalls',value: ncslpmnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newcom_lmappts',value: ncslpmnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newcom_lmsales',value: ncslpmnoofsales });

                //Others
                rec.setValue({fieldId:'custrecord_mark_newcom_ocm',value: ncsotdidntuse});
                rec.setValue({fieldId:'custrecord_mark_newcom_ocmreach',value: ncsotreachqty });
                rec.setValue({fieldId:'custrecord_mark_newcom_ocmcalls',value: ncsotnoofcalls});
                rec.setValue({fieldId:'custrecord_mark_newcom_ocmappts',value: ncsotnoofappts});
                rec.setValue({fieldId:'custrecord_mark_newcom_ocmsales',value: ncsotnoofsales });

                //other marketing if used
                rec.setValue({fieldId:'custrecord_mark_newcom_ocmdetails',value: otmktifused });

                rec.setValue({fieldId:'custrecord_mark_newcom_totalappts',value: totalnwcommthisseason });

                rec.setValue({fieldId:'custrecord_mark_newcom_totalsales',value: totalnwcommsalesthisseason });

                //Renewal Sales conversion subtab

                rec.setValue({fieldId:'custrecord_mark_rescust_lastyear',value: custlastresrensales });

                rec.setValue({fieldId:'custrecord_mark_comcust_lastyear',value: custlastcommrensales });

                rec.setValue({fieldId:'custrecord_mark_rescust_renewatt',value: custlastresrenattempts });

                rec.setValue({fieldId:'custrecord_mark_comcust_renewatt',value: custlastcommrenttempts });

                rec.setValue({fieldId:'custrecord_mark_rescust_renewed',value: custresrenewed });

                rec.setValue({fieldId:'custrecord_mark_comcust_renewed',value: custlastcommenewed });

                rec.setValue({fieldId:'custrecord_mark_rescust_conv',value: rensalrestrenpct });

                rec.setValue({fieldId:'custrecord_mark_comcust_conv',value: rensalcommtrenpct });

                rec.setValue({fieldId:'custrecord_mark_total_conv',value: rensaltotrenpct });

                rec.setValue({fieldId:'custrecord_mark_total_conv',value: rensaltotrenpct });

                rec.setValue({fieldId:'custrecord_mark_conv_web',value: holdecweb });

                rec.setValue({fieldId:'custrecord_mark_conv_service',value: afthrs });

                /*TO BE DONE
                
                rec.setValue({fieldId:'custrecord_mark_conv_service',value: afthrs });

                rec.setValue({fieldId:'custrecord_mark_conv_service',value: afthrs });

                rec.setValue({fieldId:'custrecord_mark_conv_service',value: afthrs });

                rec.setValue({fieldId:'custrecord_mark_conv_service',value: afthrs });

                rec.setValue({fieldId:'custrecord_mark_conv_service',value: afthrs });

                rec.setValue({fieldId:'custrecord_mark_conv_service',value: afthrs });

                rec.setValue({fieldId:'custrecord_mark_conv_service',value: afthrs });*/

                rec.setValue({fieldId:'custrecord_mark_conv_loyalty',value: clientloyal });

                rec.setValue({fieldId:'custrecord_mark_conv_loyaltypercent',value: clientloyalyes });

                rec.setValue({fieldId:'custrecord_mark_conv_dfp',value: decoflypgm });

                rec.setValue({fieldId:'custrecord_mark_conv_dfpreason',value: decoflypgmno });
                
                rec.setValue({fieldId:'custrecord_mark_conv_efforts',value: mkteffnseason });
                
                rec.setValue({fieldId:'custrecord_mark_elfdollars',value: elfdollar });

                rec.setValue({fieldId:'custrecord_mark_improvements',value: mktpgmimprov });

                // Sales Information

                //TOTAL REVENUE ADD
				  rec.setValue({fieldId:'custrecord_mark_total_newrev',value: ccritotnewrev });
  
                  rec.setValue({fieldId:'custrecord_mark_total_renewrev',value:  ccritotrenrev  });

                  rec.setValue({fieldId:'custrecord_mark_total_resrev',value:  ccritotalresrev });

                  rec.setValue({fieldId:'custrecord_mark_total_comrev',value:   ccritotalcomrev   });
  
  				  rec.setValue({fieldId:'custrecord_mark_total_comrev',value: ccritotalcomrev });

                rec.setValue({fieldId:'custrecord_mark_sales_fail',value: declinedsales });

                rec.setValue({fieldId:'custrecord_mark_sales_renewals',value: resrenstart });

                rec.setValue({fieldId:'custrecord_mark_sales_priorrenewals',value: pctrenpriorsept });

                rec.setValue({fieldId:'custrecord_mark_sales_installs',value: instoffrencust });

                rec.setValue({fieldId:'custrecord_mark_sales_myagreements',value: pctmultiyearcust });

                rec.setValue({fieldId:'custrecord_mark_sales_myagreementsperc',value: pctmultiyearcust });

                rec.setValue({fieldId:'custrecord_mark_sales_myagreementsperc2',value: pctmultiyearcust });

                rec.setValue({fieldId:'custrecord_mark_sales_late',value: lateseasonbusclse });

                rec.setValue({fieldId:'custrecord_mark_sales_lateclosers',value: pctlateseasonbusclseother });

                //Sales Add On Sales

                rec.setValue({fieldId:'custrecord_mark_sales_existingaddon',value: addoncustapproach }); //addon1

                rec.setValue({fieldId:'custrecord_mark_sales_addonprod',value: addoncore });//custpage_addon_prod1

                rec.setValue({fieldId:'custrecord_mark_sales_addonperc',value: pctresrendisp });//custpage_item_add1

                rec.setValue({fieldId:'custrecord_mark_sales_addondollars',value: newaddondollaravg });//custpage_item_addon1

                //Product Information Sub Tab

                rec.setValue({fieldId:'custrecord_mark_pi_facets',value: totemppeaktime }); //custpage_total_emp1

                rec.setValue({fieldId:'custrecord_mark_pi_emp',value: totchrisemppeaktime });//custpage_christotal_emp1

                rec.setValue({fieldId:'custrecord_mark_pi_crewsize',value: inscrewsize });//custpage_instcrew1

                rec.setValue({fieldId:'custrecord_mark_pi_crewhours',value: manhrsprodseason });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_mark_pi_crewsizehour',value: manhrsprodseasonrev });//custpage_rev_man_hours

                //ADP Sub Tab

                rec.setValue({fieldId:'custrecord_mark_adp_newrev',value: adpnewrev }); //custpage_total_emp1

                rec.setValue({fieldId:'custrecord_mark_adp_proddays',value: adpnewproddays });//custpage_christotal_emp1

                rec.setValue({fieldId:'custrecord_mark_adp_newcrews',value: adpnoofcrew });//custpage_instcrew1

                rec.setValue({fieldId:'custrecord_mark_adp_renewrevenue',value: adprenrev });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_mark_adp_renewproddays',value: adprenroddays });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_mark_adp_renewcrews',value: adprennoofcrew });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_mark_adp_newtotal',value: adpnewjobs });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_mark_adp_renewtotal',value: adprenewjobs });//custpage_rev_man_hours


                //Pricing Information

                rec.setValue({fieldId:'custrecord_mark_price_amp',value: pctcoreitemampmod }); //custpage_total_emp1

                rec.setValue({fieldId:'custrecord_mark_price_facia1',value: cipfacial1 });//custpage_christotal_emp1

                rec.setValue({fieldId:'custrecord_mark_price_facia2',value: cipfacial2 });//custpage_instcrew1

                rec.setValue({fieldId:'custrecord_mark_price_windows1',value: cipwin1 });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_mark_price_windows2',value: cipwin2 });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_mark_price_shrub1',value: shrubl1 });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_mark_price_shrub2',value: shrubl2 });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_mark_price_treecan1',value: treecan1 });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_mark_price_treecan2',value: treecan2 }); //custpage_total_emp1

                rec.setValue({fieldId:'custrecord_mark_price_treebranch1',value: treebran1 });//custpage_christotal_emp1

                rec.setValue({fieldId:'custrecord_mark_price_treebranch2',value: treebran2 });//custpage_instcrew1

                rec.setValue({fieldId:'custrecord_mark_price_treestake1',value: treestak1 });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_mark_price_treestake2',value: treestak2 });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_mark_price_garland1',value: gar1 });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_mark_price_garland2',value: gar2 });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_mark_price_w361',value: wreath361 });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_mark_price_w362',value: wreath362 });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_mark_price_w481',value: wreath481 });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_mark_price_w482',value: wreath482 });//custpage_rev_man_hours


                // Cost Information

                rec.setValue({fieldId:'custrecord_ci_totallabor',value: totallabcostseas });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_ci_newsales',value: totprodcost });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_ci_totalsales',value: totsalescost });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_ci_totalequipment',value: totspleqcost });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_ci_additionalcost',value: totaddcosts });//custpage_prod_emp_hours

                rec.setValue({fieldId:'custrecord_gi_salesapp',value: salesappuse });//custpage_rev_man_hours

                rec.setValue({fieldId:'custrecord_gi_rateapp',value: salesapprate });//custpage_rev_man_hours

                // General Information

                rec.setValue({fieldId:'custrecord_gi_increasemarket',value: incincomp });//custpage_compinc1
                
                rec.setValue({fieldId:'custrecord_gi_cdassist',value: assistsales });//custpage_imp_bus1
                
                rec.setValue({fieldId:'custrecord_gi_scc',value: servicecommit1 });//custpage_service1
                
                rec.setValue({fieldId:'custrecord_payment',value: paymetnmethod });//custpage_rev_man_hourscustrecord_gi_increasemarket


                rec.save();
                
            }
            catch(e){
                        log.debug({title:'Error',details:e.message});
            }

            }
        }

        function printDateTime(datetype, addDays, addHours) {

            var d = new Date();
            if (addDays > 0) {
                d.setDate(d.getDate() + addDays);
            }
            if (addHours > 0) {
                d.setHours(d.getHours() + addHours);
            }
            var myMonth = d.getMonth() + 1;
            var myDay = d.getDate();
            var myYear = d.getFullYear();
            var myHour = d.getHours();
            var myMin = d.getMinutes();
            if (myMin > 10) {
                myMin = "0" + myMin;
            }
            if (myHour > 12) {
                myHour = myHour - 12;
                myMin = myMin + " PM";
            } else {
                myMin = myMin + " AM";
            }

            var myTime = myHour + ":" + myMin;
            var myDate;
            switch (datetype) {
                case 'datetime':
                    myDate = myMonth + "/" + myDay + "/" + myYear + " "
                        + myTime;
                    break;
                case 'date':
                    myDate = myMonth + "/" + myDay + "/" + myYear;
                    break;
                case 'time':
                    myDate = myTime;
                    break;
                default:
                    myDate = myMonth + "/" + myDay + "/" + myYear;
            }

            return myDate;
        }
        function xferOrderForm(context) {
            var request = context.request;
            var form = serverWidget.createForm({
                title: "Customer Survey Form"
            });
            //form.clientScriptModulePath = 'SuiteScripts/RAZ/RAZ_PickAssignment_Client.js';
            var today = printDateTime('date');
            var defaultValues = {
                custpage_date: today
            };
            // Add Fields
            // 

            var fieldgroup1m = form.addFieldGroup({
                id: 'fieldgroupid1m',
                label: '<font size=6 ><b>CDI Year End Reporting System</b></font><br\><br\><br\><br\><font size = 4><b>Welcome to the 2019 Christmas Decor Year-End Annual Reporting Survey</b><br\><br\>GENERAL INFO:</font><br\><br\>Congratulations on another successful season. Welcome to the "Annual Survey". This annual survey is a required activity <br\>of your Franchise Agreement. The survey results create a tool that CD Corporate uses to <br\>make a number of decisions about the future of our system. As such, it is extremely important to answer all questions and answer as accurately as possible. <br\>If you have any questions about the survey or need help - please contact Mike Donahue (mdonahue@thedecorgroup.com) or Kathy Rawls in the Legal Department.<br\><br\><br\>REQUIREMMENTS<br\><br\>1. <b>PAYMENT INFORMATION:</b> At the end of this process, you will give us all the information we need to process your Year-End ROYALTIES and Marketing Development Fund (MDF) fees. <br\>Therefore, you must have a valid form of payment on file with us. <br\>If you are wanting to use a new credit card or ACH account - you must call and give us this info PRIOR to starting this process. Call corporate and ask for Barbara barbara@thedecorgroup.com in the accounting department (806)-319-7069 and give her the required payment information.<br\><br\>2. <b>CUSTOMER LIST:</b> You must have your "Customer List" ready to upload to this Survey. There are two accepted forms of the Customer List - one comes out of LightRight and the other (for non-lightright users) is available on the Intranet. <br\>These forms MUST be complete - accurate and total the same as what you report below in the Sales Information table. More information can be found below.<br\><br\>3. <b>PAST DUE:</b> Part of the "Annual Reporting" process is to clean up all past-due invoices. The best way to ensure the accuracy of this process is to pay any/all of these invoices before reporting. Please call customer service or Barbara (in accounting) and they will help you clean up any past due invoices prior to reporting. <br\><br\> 4. <b>ONE SITTING:</b> Because of some technical issues, the survey needs to be completed in ONE session. Do not start the session - and then plan on coming back to it later.<br\> That will not work and will only cause you a LOT of frustration. It is best if you download the BLANK version of this survey - and complete it prior to starting this survey. The blank pdf version of this survey can be found HERE on the intranet.<br\><br\>5. <b>FRANCHISE INFORMATION:</b> You may be wondering why the form is not asking for information about your specific location/franchise. This is because the LINK you clicked on contains all that information in it already. We have hidden the fields so that the information can not accidentally be "overwritten" thus introducing errors.<br\><br\>'
            });
        
            form.addField({
                id: 'custpage_1m',
                type: serverWidget.FieldType.TEXT,
                label: '  ',
                container: 'fieldgroupid1m'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";
            

                ////  
            var fieldgroup = form.addFieldGroup({
                id: 'fieldgroupid1',
                label: 'Primary Information'
            });

            var acls = form.addField({
                id: 'custpage_customer_no',
                type: serverWidget.FieldType.TEXT,
                label: 'Input your ACLS or Customer#',
              	source:'custrecord104',
                container: 'fieldgroupid1'
            });
            acls.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });
          acls. updateDisplayType({
                        displayType: serverWidget.FieldDisplayType.INLINE});
         
            var aclscorrect = form.addField({
                id: 'custpage_customer_no_corrected',
                type: serverWidget.FieldType.TEXT,
                label: 'Correct ACLS or Customer#',
                container: 'fieldgroupid1'
            });
            aclscorrect.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });
            var franchiseName = form.addField({
                id: 'custpage_franchise_name',
                type: serverWidget.FieldType.TEXT,
                label: 'Franchise Name',
                container: 'fieldgroupid1'
            });
            franchiseName.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            var franchiseName = form.addField({
                id: 'custpage_franchise_location',
                type: serverWidget.FieldType.TEXT,
                label: 'Franchise Location/Territory Name',
                container: 'fieldgroupid1'
            });
            franchiseName.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            var franchiseName = form.addField({
                id: 'custpage_franchise_number',
                type: serverWidget.FieldType.TEXT,
                label: 'Your Franchise/ Location Number',
                container: 'fieldgroupid1'
            });
            franchiseName.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            var franchiseName = form.addField({
                id: 'custpage_first_name',
                type: serverWidget.FieldType.TEXT,
                label: 'First Name',
                container: 'fieldgroupid1'
            });
            franchiseName.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            var franchiseName = form.addField({
                id: 'custpage_last_name',
                type: serverWidget.FieldType.TEXT,
                label: 'Last Name',
                container: 'fieldgroupid1'
            });
            franchiseName.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            var franchiseName = form.addField({
                id: 'custpage_franchise_email',
                type: serverWidget.FieldType.EMAIL,
                label: 'Email',
                container: 'fieldgroupid1'
            });
            franchiseName.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            var franchiseName = form.addField({
                id: 'custpage_franchise_phone_number',
                type: serverWidget.FieldType.PHONE,
                label: 'Phone Number',
                container: 'fieldgroupid1'
            });
            franchiseName.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            //
            var fieldgroup0a = form
            .addFieldGroup({
                id: 'fieldgroupid0a',
                label: 'Marketing Expenses'
            });
          //fieldgroup0a.isBorderHidden = true;
        //var label = fieldgroup.label;
        var a1 = form.addField({
            id: 'custpage_web_a1',
            type: serverWidget.FieldType.LABEL,
            label: '<b>Marketing Expenses</b>',
            container: 'fieldgroupid0a'
        });
        a1.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });
        /**     webque.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.NORMAL
             });*/

        var a2 = form.addField({
            id: 'custpage_web_a2',
            type: serverWidget.FieldType.TEXT,
            label: "Residential",
            container: 'fieldgroupid0a'
        });
        /**    didntuse1.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
        a2.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });
        var a3= form.addField({
            id: 'custpage_reach_a3',
            type: serverWidget.FieldType.TEXT,
            label: "Commercial",
            container: 'fieldgroupid0a'
        });
        /**     reachqtyd1.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
        a3.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });
          var fieldgroupb = form.addFieldGroup({
                id: 'fieldgroupidb',
                label: 'hIDDEN'
            });
            fieldgroupb.isBorderHidden = true;
            form
                .addField({
                    id: 'custpage_mar_exp',
                    type: serverWidget.FieldType.TEXT,
                    label: "Total Marketing Expenses ",
                    container: 'fieldgroupidb'
                });
     


            //

            var fieldgroup = form
                .addFieldGroup({
                    id: 'fieldgroupid',
                    label: 'New Residential Sales Conversion - Marketing reach and conversion for New Residential sales'
                });
            //var label = fieldgroup.label;
            var webque = form.addField({
                id: 'custpage_web_que',
                type: serverWidget.FieldType.LABEL,
                label: '<b>FLIERS</b>',
                container: 'fieldgroupid'
            });
            webque.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /**     webque.updateLayoutType({
                     layoutType : serverWidget.FieldLayoutType.NORMAL
                 });*/

            var didntuse1 = form.addField({
                id: 'custpage_web_que1',
                type: serverWidget.FieldType.SELECT,
                label: "Do you use Fliers?",
                source:'customlist1438',
                container: 'fieldgroupid'
            });
            /**    didntuse1.updateLayoutType({
                    layoutType : serverWidget.FieldLayoutType.STARTROW
                });*/
            didntuse1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var reachqtyd1 = form.addField({
                id: 'custpage_reach_qtyd1',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid'
            });
            /**     reachqtyd1.updateLayoutType({
                     layoutType : serverWidget.FieldLayoutType.MIDROW
                 });*/
            reachqtyd1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var noofcalls1 = form.addField({
                id: 'custpage_num_calls1',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid'
            });
            /**    noofcalls1.updateLayoutType({
                    layoutType : serverWidget.FieldLayoutType.MIDROW
                });*/
            noofcalls1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var noofappts1 = form.addField({
                id: 'custpage_num_appts1',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid'
            });
            /**     noofappts1.updateLayoutType({
                     layoutType : serverWidget.FieldLayoutType.MIDROW
                 });*/
            noofappts1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            var noofsales1 = form.addField({
                id: 'custpage_num_sales1',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid'
            });
            /**  noofsales1.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            noofsales1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            //Second Questionnaire Start
            //
            //
            var fieldgroup2 = form.addFieldGroup({
                id: 'fieldgroupid2',
                label: 'hIDDEN'
            });
            fieldgroup2.isBorderHidden = true;

            var webque2 = form.addField({
                id: 'custpage_web_que2',
                type: serverWidget.FieldType.LABEL,
                label: '<b>DIRECT MAIL</b>',
                container: 'fieldgroupid2'
            });
            /*  webque2.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.NORMAL
              });*/
            webque2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            var didntuse2 = form.addField({
                id: 'custpage_web_que21',
                type: serverWidget.FieldType.SELECT,
                label: "Do you use direct mail?",
                source: 'customlist1438',
                container: 'fieldgroupid2'
            });
            /* didntuse2.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.STARTROW
             });*/
            didntuse2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var reachqtyd2 = form.addField({
                id: 'custpage_reach_qtyd2',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid2'
            });
            /* reachqtyd2.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            reachqtyd2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var noofcalls2 = form.addField({
                id: 'custpage_num_calls2',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid2'
            });
            /* noofcalls2.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            noofcalls2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var noofappts2 = form.addField({
                id: 'custpage_num_appts2',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid2'
            });
            /*  noofappts2.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            noofappts2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var noofsales2 = form.addField({
                id: 'custpage_num_sales2',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid2'
            });
            /* noofsales2.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.ENDROW
             });*/
            noofsales2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            // Second Ends
            // 
            //Third Questionnaire Start
            //
            //
            var fieldgroup3 = form.addFieldGroup({
                id: 'fieldgroupid3',
                label: 'hIDDEN'
            });
            fieldgroup3.isBorderHidden = true;
            var webque3 = form.addField({
                id: 'custpage_web_que3',
                type: serverWidget.FieldType.LABEL,
                label: '<b>PURL</b>',
                container: 'fieldgroupid3'
            });
            webque3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  webque3.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.NORMAL
              });*/

            var didntuse3 = form.addField({
                id: 'custpage_web_que31',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE PURL?",
                source:'customlist1438',
                container: 'fieldgroupid3'
            });
            didntuse3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse3.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd3 = form.addField({
                id: 'custpage_reach_qtyd3',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid3'
            });
            /*reachqtyd3.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            reachqtyd3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var noofcalls3 = form.addField({
                id: 'custpage_num_calls3',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid3'
            });
            noofcalls3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofcalls3.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofappts3 = form.addField({
                id: 'custpage_num_appts3',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid3'
            });
            noofappts3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofappts3.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofsales3 = form.addField({
                id: 'custpage_num_sales3',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid3'
            });
            noofsales3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofsales3.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.ENDROW
            });*/

            // Third Ends.

            //Fourth Questionnaire Start
            var fieldgroup4 = form.addFieldGroup({
                id: 'fieldgroupid4',
                label: 'hIDDEN'
            });
            fieldgroup4.isBorderHidden = true;

            var webque4 = form.addField({
                id: 'custpage_web_que4',
                type: serverWidget.FieldType.LABEL,
                label: '<b>REFERRALS</b>',
                container: 'fieldgroupid4'
            });
            webque4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*webque4.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.NORMAL
            });*/

            var didntuse4 = form.addField({
                id: 'custpage_web_que41',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE REFERRALS?",
                source:'customlist1438',
                container: 'fieldgroupid4'
            });
            didntuse4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse4.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd4 = form.addField({
                id: 'custpage_reach_qtyd4',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid4'
            });
            reachqtyd4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*reachqtyd4.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofcalls4 = form.addField({
                id: 'custpage_num_calls4',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid4'
            });
            noofcalls4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofcalls4.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofappts4 = form.addField({
                id: 'custpage_num_appts4',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid4'
            });
            noofappts4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofappts4.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofsales4 = form.addField({
                id: 'custpage_num_sales4',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid4'
            });
            noofsales4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofsales4.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.ENDROW
            });*/

            // 4th Ends

            // Return Form
            // 
            // 5th 
            // 
            var fieldgroup5 = form.addFieldGroup({
                id: 'fieldgroupid5',
                label: 'hIDDEN'
            });
            fieldgroup5.isBorderHidden = true;
            var webque5 = form.addField({
                id: 'custpage_web_que5',
                type: serverWidget.FieldType.LABEL,
                label: '<b>CD CORPORATE WEBSITE</b>',
                container: 'fieldgroupid5'
            });
            webque5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*webque5.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.NORMAL
            });*/

            var didntuse5 = form.addField({
                id: 'custpage_web_que51',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE Corporate Website?",
                source:'customlist1438',
                container: 'fieldgroupid5'
            });
            didntuse5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse5.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd5 = form.addField({
                id: 'custpage_reach_qtyd5',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid5'
            });
            reachqtyd5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*reachqtyd5.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofcalls5 = form.addField({
                id: 'custpage_num_calls5',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid5'
            });
            noofcalls5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofcalls5.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofappts5 = form.addField({
                id: 'custpage_num_appts5',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid5'
            });
            noofappts5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofappts5.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofsales5 = form.addField({
                id: 'custpage_num_sales5',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid5'
            });
            noofsales5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofsales5.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.ENDROW
             });*/
            /// 5 ends
            // 

            // 6th 
            // 
            var fieldgroup6 = form.addFieldGroup({
                id: 'fieldgroupid6',
                label: 'hIDDEN'
            });
            fieldgroup6.isBorderHidden = true;
            var webque6 = form.addField({
                id: 'custpage_web_que6',
                type: serverWidget.FieldType.LABEL,
                label: '<b>FRANCHISE WEBSITE</b>',
                container: 'fieldgroupid6'
            });
            webque6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* webque6.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.NORMAL
             });*/

            var didntuse6 = form.addField({
                id: 'custpage_web_que61',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE Franchise Website?",
                source:'customlist1438',
                container: 'fieldgroupid6'
            });
            didntuse6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse6.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd6 = form.addField({
                id: 'custpage_reach_qtyd6',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid6'
            });
            reachqtyd6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* reachqtyd6.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofcalls6 = form.addField({
                id: 'custpage_num_calls6',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid6'
            });
            noofcalls6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofcalls6.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofappts6 = form.addField({
                id: 'custpage_num_appts6',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid6'
            });
            noofappts6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofappts6.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofsales6 = form.addField({
                id: 'custpage_num_sales6',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid6'
            });
            noofsales6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofsales6.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.ENDROW
            });*/
            /// 6 ends

            // 7th 
            var fieldgroup7 = form.addFieldGroup({
                id: 'fieldgroupid7',
                label: 'hIDDEN'
            });
            fieldgroup7.isBorderHidden = true;
            var webque7 = form.addField({
                id: 'custpage_web_que7',
                type: serverWidget.FieldType.LABEL,
                label: '<b>SOCIAL MEDIA</b>',
                container: 'fieldgroupid7'
            });
            webque7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* webque7.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.NORMAL
             });*/

            var didntuse7 = form.addField({
                id: 'custpage_web_que71',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE Social Website?",
                source:'customlist1438',
                container: 'fieldgroupid7'
            });
            didntuse7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse7.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd7 = form.addField({
                id: 'custpage_reach_qtyd7',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid7'
            });
            reachqtyd7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  reachqtyd7.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofcalls7 = form.addField({
                id: 'custpage_num_calls7',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid7'
            });
            noofcalls7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofcalls7.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofappts7 = form.addField({
                id: 'custpage_num_appts7',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid7'
            });
            noofappts7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofappts7.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofsales7 = form.addField({
                id: 'custpage_num_sales7',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid7'
            });
            noofsales7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofsales7.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.ENDROW
            });*/
            /// 7 ends

            // 8th 
            // 
            //       
            var fieldgroup8 = form.addFieldGroup({
                id: 'fieldgroupid8',
                label: 'hIDDEN'
            });
            fieldgroup8.isBorderHidden = true;
            var webque8 = form.addField({
                id: 'custpage_web_que8',
                type: serverWidget.FieldType.LABEL,
                label: '<b>BROADCAST MEDIA</b>',
                container: 'fieldgroupid8'
            });
            webque8.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*webque8.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.NORMAL
            });*/

            var didntuse8 = form.addField({
                id: 'custpage_web_que81',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE BROADCAST MEDIA?",
                source:'customlist1438',
                container: 'fieldgroupid8'
            });
            didntuse8.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse8.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd8 = form.addField({
                id: 'custpage_reach_qtyd8',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid8'
            });
            reachqtyd8.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*reachqtyd8.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofcalls8 = form.addField({
                id: 'custpage_num_calls8',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid8'
            });
            noofcalls8.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofcalls8.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofappts8 = form.addField({
                id: 'custpage_num_appts8',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid8'
            });
            noofappts8.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofappts8.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofsales8 = form.addField({
                id: 'custpage_num_sales8',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid8'
            });
            noofsales8.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofsales8.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.ENDROW
             });*/
            ///8 th ends

            // 9th 
            // 
            var fieldgroup9 = form.addFieldGroup({
                id: 'fieldgroupid9',
                label: 'hIDDEN'
            });
            fieldgroup9.isBorderHidden = true;
            var webque9 = form.addField({
                id: 'custpage_web_que9',
                type: serverWidget.FieldType.LABEL,
                label: '<b>LOCAL PRINT MEDIA</b>',
                container: 'fieldgroupid9'
            });
            webque9.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* webque9.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.NORMAL
             });*/

            var didntuse9 = form.addField({
                id: 'custpage_web_que91',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE LOCAL PRINT MEDIA?",
                source:'customlist1438',
                container: 'fieldgroupid9'
            });
            didntuse9.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* didntuse9.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.STARTROW
             });*/
            var reachqtyd9 = form.addField({
                id: 'custpage_reach_qtyd9',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid9'
            });
            reachqtyd9.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* reachqtyd9.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofcalls9 = form.addField({
                id: 'custpage_num_calls9',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid9'
            });
            noofcalls9.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofcalls9.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofappts9 = form.addField({
                id: 'custpage_num_appts9',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid9'
            });
            noofappts9.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofappts9.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofsales9 = form.addField({
                id: 'custpage_num_sales9',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid9'
            });
            noofsales9.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofsales9.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.ENDROW
             });*/
            ///9 th ends

            // 10th 
            // 
            var fieldgroup10 = form.addFieldGroup({
                id: 'fieldgroupid10',
                label: 'hIDDEN'
            });
            fieldgroup10.isBorderHidden = true;
            var webque10 = form.addField({
                id: 'custpage_web_que10',
                type: serverWidget.FieldType.LABEL,
                label: '<b>OTHERS</b>',
                container: 'fieldgroupid10'
            });
            webque10.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  webque10.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.NORMAL
              });*/

            var didntuse10 = form.addField({
                id: 'custpage_web_que101',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE ANY OTHER MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupid10'
            });
            didntuse10.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  didntuse10.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.STARTROW
              });*/

            var reachqtyd10 = form.addField({
                id: 'custpage_reach_qtyd10',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid10'
            });
            reachqtyd10.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* reachqtyd10.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofcalls10 = form.addField({
                id: 'custpage_num_calls10',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid10'
            });
            noofcalls10.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofcalls10.updateLayoutType({
            /      layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofappts10 = form.addField({
                id: 'custpage_num_appts10',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid10'
            });
            noofappts10.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofappts10.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofsales10 = form.addField({
                id: 'custpage_num_sales10',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid10'
            });
            noofsales10.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofsales10.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/

            ///10 th ends

            var fieldgroup11 = form.addFieldGroup({
                id: 'fieldgroupid11',
                label: 'hIDDEN'
            });
            fieldgroup11.isBorderHidden = true;
            form
                .addField({
                    id: 'custpage_res_marketing',
                    type: serverWidget.FieldType.TEXT,
                    label: "Other Residential marketing - if you used, 'Other'- please tell us what worked for you this season",
                    container: 'fieldgroupid11'
                });
            var fieldgroup12 = form.addFieldGroup({
                id: 'fieldgroupid12',
                label: 'hIDDEN'
            });
            fieldgroup12.isBorderHidden = true;
            form.addField({
                id: 'custpage_new_res',
                type: serverWidget.FieldType.TEXT,
                label: "Total New Residential Appointments this season",
                container: 'fieldgroupid12'
            });
            form.addField({
                id: 'custpage_new_res_sales',
                type: serverWidget.FieldType.TEXT,
                label: "Total New Residential Sales this season",
                container: 'fieldgroupid12'
            });

            var fieldgroup12a = form.addFieldGroup({
                id: 'fieldgroupid12a',
                label: 'Dedicated Marketing'
            });
            form
                .addField(
                    {
                        id: 'custpage_dedicated',
                        type: serverWidget.FieldType.TEXT,
                        label: 'Did you do any DEDICATED commercial marketing this season? If YES, please fill in the following table completely. ',
                        container: 'fieldgroupid12a'
                    }).updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.NORMAL
                    }).updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    }).updateDisplayType({
                        displayType: serverWidget.FieldDisplayType.INLINE
                    }).defaultValue = "";

            var dedicated1 = form.addField({
                id: 'custpage_dedicated1',
                type: serverWidget.FieldType.SELECT,
                label: ' ',
                source: 'customlist1438',
                container: 'fieldgroupid12a'
            });
           /* var dedicate2 = form.addField({
                id: 'custpage_dedicated1',
                type: serverWidget.FieldType.RADIO,
                label: 'No',
                source: 'p2',
                container: 'fieldgroupid12a'
            });

            dedicated1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            dedicated1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            dedicate2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            dedicate2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/
            //Start 2nd Table

            var fieldgroup = form
                .addFieldGroup({
                    id: 'fieldgroupida',
                    label: 'New Commercial Sales Conversion - Marketing reach and conversion for NEW COMMERCIAL sales'
                });
            //var label = fieldgroup.label;
            var webquea = form.addField({
                id: 'custpage_web_quea',
                type: serverWidget.FieldType.LABEL,
                label: '<b>DIRECT MAIL</b>',
                container: 'fieldgroupida'
            });
            /* webquea.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.NORMAL
             });*/
            webquea.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            var didntuse1a = form.addField({
                id: 'custpage_web_que1a',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE DIRECT MAIL FOR NEW COMMERCIAL MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupida'
            });
            didntuse1a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse1a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd1a = form.addField({
                id: 'custpage_reach_qtyd1a',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupida'
            });
            reachqtyd1a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  reachqtyd1a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofcalls1a = form.addField({
                id: 'custpage_num_calls1a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupida'
            });
            noofcalls1a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*
              noofcalls1a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofappts1a = form.addField({
                id: 'custpage_num_appts1a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupida'
            });
            noofappts1a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofappts1a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/

            var noofsales1a = form.addField({
                id: 'custpage_num_sales1a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupida'
            });
            noofsales1a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofsales1a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/

            //Second Questionnaire Start
            //
            //
            var fieldgroup2a = form.addFieldGroup({
                id: 'fieldgroupid2a',
                label: 'hIDDEN'
            });
            fieldgroup2a.isBorderHidden = true;

            var webque2a = form.addField({
                id: 'custpage_web_que2a',
                type: serverWidget.FieldType.LABEL,
                label: '<b>COLD CALL</b>',
                container: 'fieldgroupid2a'
            });
            webque2a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  webque2a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.NORMAL
              });*/

            var didntuse2a = form.addField({
                id: 'custpage_web_que21a',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE OLD CALL FOR NEW COMMERCIAL MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupid2a'
            });
            didntuse2a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse2a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd2a = form.addField({
                id: 'custpage_reach_qtyd2a',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid2a'
            });
            reachqtyd2a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  reachqtyd2a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofcalls2a = form.addField({
                id: 'custpage_num_calls2a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid2a'
            });
            noofcalls2a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofcalls2a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofappts2a = form.addField({
                id: 'custpage_num_appts2a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid2a'
            });
            noofappts2a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofappts2a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofsales2a = form.addField({
                id: 'custpage_num_sales2a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid2a'
            });
            noofsales2a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofsales2a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.ENDROW
             });*/
            // Second Ends
            // 
            //Third Questionnaire Starta
            //
            //
            var fieldgroup3a = form.addFieldGroup({
                id: 'fieldgroupid3a',
                label: 'hIDDEN'
            });
            fieldgroup3a.isBorderHidden = true;
            var webque3a = form.addField({
                id: 'custpage_web_que3a',
                type: serverWidget.FieldType.LABEL,
                label: '<b>REFERRALS</b>',
                container: 'fieldgroupid3a'
            });
            webque3a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  webque3a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.NORMAL
              });*/

            var didntuse3a = form.addField({
                id: 'custpage_web_que31a',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE REFERRALS FOR NEW COMMERCIAL MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupid3a'
            });
            didntuse3a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse3a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd3a = form.addField({
                id: 'custpage_reach_qtyd3a',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid3a'
            });
            reachqtyd3a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*reachqtyd3a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofcalls3a = form.addField({
                id: 'custpage_num_calls3a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid3a'
            });
            noofcalls3a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofcalls3a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofappts3a = form.addField({
                id: 'custpage_num_appts3a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid3a'
            });
            noofappts3a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofappts3a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofsales3a = form.addField({
                id: 'custpage_num_sales3a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid3a'
            });
            noofsales3a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofsales3a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.ENDROW
              });*/

            // Third Ends.

            //Fourth Questionnaire Start
            var fieldgroup4a = form.addFieldGroup({
                id: 'fieldgroupid4a',
                label: 'hIDDEN'
            });
            fieldgroup4a.isBorderHidden = true;

            var webque4a = form.addField({
                id: 'custpage_web_que4a',
                type: serverWidget.FieldType.LABEL,
                label: '<b>CD CORPORATE WEBSITE</b>',
                container: 'fieldgroupid4a'
            });
            webque4a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* webque4a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.NORMAL
             });*/

            var didntuse4a = form.addField({
                id: 'custpage_web_que41a',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE CD CORPORATE WEBSITE FOR NEW COMMERCIAL MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupid4a'
            });
            didntuse4a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* didntuse4a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.STARTROW
             });*/
            var reachqtyd4a = form.addField({
                id: 'custpage_reach_qtyd4a',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid4a'
            });
            reachqtyd4a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* reachqtyd4a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofcalls4a = form.addField({
                id: 'custpage_num_calls4a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid4a'
            });
            noofcalls4a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofcalls4a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofappts4a = form.addField({
                id: 'custpage_num_appts4a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid4a'
            });
            noofappts4a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofappts4a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofsales4a = form.addField({
                id: 'custpage_num_sales4a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid4a'
            });
            noofsales4a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofsales4a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.ENDROW
              });*/

            // 4th Ends

            // Return Form
            // 
            // 5th 
            // 
            var fieldgroup5a = form.addFieldGroup({
                id: 'fieldgroupid5a',
                label: 'hIDDEN'
            });
            fieldgroup5a.isBorderHidden = true;
            var webque5a = form.addField({
                id: 'custpage_web_que5a',
                type: serverWidget.FieldType.LABEL,
                label: '<b>FRANCHISE WEBSITE</b>',
                container: 'fieldgroupid5a'
            });
            webque5a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*webque5a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.NORMAL
            });*/

            var didntuse5a = form.addField({
                id: 'custpage_web_que51a',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE FRANCHISE WEBSITE FOR NEW COMMERCIAL MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupid5a'
            });
            didntuse5a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*didntuse5a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.STARTROW
            });*/
            var reachqtyd5a = form.addField({
                id: 'custpage_reach_qtyd5a',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid5a'
            });
            reachqtyd5a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*reachqtyd5a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofcalls5a = form.addField({
                id: 'custpage_num_calls5a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid5a'
            });
            noofcalls5a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofcalls5a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofappts5a = form.addField({
                id: 'custpage_num_appts5a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid5a'
            });
            noofappts5a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofappts5a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofsales5a = form.addField({
                id: 'custpage_num_sales5a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid5a'
            });
            noofsales5a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofsales5a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.ENDROW
             });*/
            /// 5 ends
            // 

            // 6th 
            // 
            var fieldgroup6a = form.addFieldGroup({
                id: 'fieldgroupid6a',
                label: 'hIDDEN'
            });
            fieldgroup6a.isBorderHidden = true;
            var webque6a = form.addField({
                id: 'custpage_web_que6a',
                type: serverWidget.FieldType.LABEL,
                label: '<b>SOCIAL MEDIA</b>',
                container: 'fieldgroupid6a'
            });
            webque6a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  webque6a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.NORMAL
              });
  */
            var didntuse6a = form.addField({
                id: 'custpage_web_que61a',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE SOCIAL MEDIA FOR NEW COMMERCIAL MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupid6a'
            });
            didntuse6a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  didntuse6a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.STARTROW
              });*/
            var reachqtyd6a = form.addField({
                id: 'custpage_reach_qtyd6a',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid6a'
            });
            reachqtyd6a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*reachqtyd6a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofcalls6a = form.addField({
                id: 'custpage_num_calls6a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid6a'
            });
            noofcalls6a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofcalls6a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.MIDROW
              });*/
            var noofappts6a = form.addField({
                id: 'custpage_num_appts6a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid6a'
            });
            noofappts6a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofappts6a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofsales6a = form.addField({
                id: 'custpage_num_sales6a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid6a'
            });
            noofsales6a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofsales6a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.ENDROW
              });*/
            /// 6 ends

            // 7th 
            var fieldgroup7a = form.addFieldGroup({
                id: 'fieldgroupid7a',
                label: 'hIDDEN'
            });
            fieldgroup7a.isBorderHidden = true;
            var webque7a = form.addField({
                id: 'custpage_web_que7a',
                type: serverWidget.FieldType.LABEL,
                label: '<b>BROADCAST MEDIA</b>',
                container: 'fieldgroupid7a'
            });
            webque7a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* webque7a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.NORMAL
             });*/

            var didntuse7a = form.addField({
                id: 'custpage_web_que71a',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE BROADCAST MEDIA FOR NEW COMMERCIAL MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupid7a'
            });
            didntuse7a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* didntuse7a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.STARTROW
             });*/
            var reachqtyd7a = form.addField({
                id: 'custpage_reach_qtyd7a',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid7a'
            });
            reachqtyd7a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* reachqtyd7a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofcalls7a = form.addField({
                id: 'custpage_num_calls7a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid7a'
            });
            noofcalls7a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofcalls7a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofappts7a = form.addField({
                id: 'custpage_num_appts7a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid7a'
            });
            noofappts7a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofappts7a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofsales7a = form.addField({
                id: 'custpage_num_sales7a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid7a'
            });
            noofsales7a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*  noofsales7a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.ENDROW
              });*/
            /// 7 ends

            // 8th 
            // 
            //       
            var fieldgroup8a = form.addFieldGroup({
                id: 'fieldgroupid8a',
                label: 'hIDDEN'
            });
            fieldgroup8a.isBorderHidden = true;
            var webque8a = form.addField({
                id: 'custpage_web_que8a',
                type: serverWidget.FieldType.LABEL,
                label: '<b>LOCAL PRINT MEDIA</b>',
                container: 'fieldgroupid8a'
            });
            webque8a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* webque8a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.NORMAL
             });*/

            var didntuse8a = form.addField({
                id: 'custpage_web_que81a',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU USE BLOCAL PRINT MEDIA FOR NEW COMMERCIAL MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupid8a'
            });
            didntuse8a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* didntuse8.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.STARTROW
             });*/
            var reachqtyd8a = form.addField({
                id: 'custpage_reach_qtyd8a',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid8a'
            });
            reachqtyd8a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* reachqtyd8a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofcalls8a = form.addField({
                id: 'custpage_num_calls8a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid8a'
            });
            noofcalls8a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofcalls8a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofappts8a = form.addField({
                id: 'custpage_num_appts8a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid8a'
            });
            noofappts8a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofappts8a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofsales8a = form.addField({
                id: 'custpage_num_sales8a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid8a'
            });
            noofsales8a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*noofsales8a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.ENDROW
            });*/
            ///8 th ends

            // 9th 
            // 
            var fieldgroup9a = form.addFieldGroup({
                id: 'fieldgroupid9a',
                label: 'hIDDEN'
            });
            fieldgroup9a.isBorderHidden = true;
            var webque9a = form.addField({
                id: 'custpage_web_que9a',
                type: serverWidget.FieldType.LABEL,
                label: '<b>OTHERS</b>',
                container: 'fieldgroupid9a'
            });
            webque9a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* webque9a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.NORMAL
             });*/

            var didntuse9a = form.addField({
                id: 'custpage_web_que91a',
                type: serverWidget.FieldType.SELECT,
                label: "DID YOU ANY OTHERS MARKETING FOR NEW COMMERCIAL MARKETING?",
                source:'customlist1438',
                container: 'fieldgroupid9a'
            });
            didntuse9a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*
              didntuse9a.updateLayoutType({
                  layoutType : serverWidget.FieldLayoutType.STARTROW
              });*/
            var reachqtyd9a = form.addField({
                id: 'custpage_reach_qtyd9a',
                type: serverWidget.FieldType.INTEGER,
                label: "Reach / Qty Dist",
                container: 'fieldgroupid9a'
            });
            reachqtyd9a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*reachqtyd9a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofcalls9a = form.addField({
                id: 'custpage_num_calls9a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Calls",
                container: 'fieldgroupid9a'
            });
            noofcalls9a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*oofcalls9a.updateLayoutType({
                layoutType : serverWidget.FieldLayoutType.MIDROW
            });*/
            var noofappts9a = form.addField({
                id: 'custpage_num_appts9a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Appointments",
                container: 'fieldgroupid9a'
            });
            noofappts9a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /*oofappts9a.updateLayoutType({
                 layoutType : serverWidget.FieldLayoutType.MIDROW
             });*/
            var noofsales9a = form.addField({
                id: 'custpage_num_sales9a',
                type: serverWidget.FieldType.INTEGER,
                label: "# of Sales",
                container: 'fieldgroupid9a'
            });
            noofsales9a.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            /* noofsales9a.updateLayoutType({
                   layoutType : serverWidget.FieldLayoutType.ENDROW
               });*/
            ///9 th ends
            var fieldgroup11b = form.addFieldGroup({
                id: 'fieldgroupid11b',
                label: 'hIDDEN'
            });
            fieldgroup11b.isBorderHidden = true;
            form
                .addField({
                    id: 'custpage_res_marketing_b',
                    type: serverWidget.FieldType.TEXT,
                    label: "Other Residential marketing - if you used, 'Other'- please tell us what worked for you this season",
                    container: 'fieldgroupid11b'
                });
            var fieldgroup12b = form.addFieldGroup({
                id: 'fieldgroupid12b',
                label: 'hIDDEN'
            });
            fieldgroup12b.isBorderHidden = true;
            form.addField({
                id: 'custpage_new_res_b',
                type: serverWidget.FieldType.TEXT,
                label: "Total New Commercial Appointments this season",
                container: 'fieldgroupid12b'
            });
            form.addField({
                id: 'custpage_new_res_sales_b',
                type: serverWidget.FieldType.TEXT,
                label: "Total New Commercial Sales this season",
                container: 'fieldgroupid12b'
            });
            ///
            var fieldgroup13 = form.addFieldGroup({
                id: 'fieldgroupid13',
                label: 'RENEWAL Sales Conversion Information (by # of customers):'
            });


            //var label = fieldgroup.label;
            var webqueb = form.addField({
                id: 'custpage_web_queb',
                type: serverWidget.FieldType.LABEL,
                label: '<b># of Customers(Last Season)</b>',
                container: 'fieldgroupid13'
            });
            webqueb.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var residential1 = form.addField({
                id: 'custpage_web_que1b',
                type: serverWidget.FieldType.TEXT,
                label: "Residential",
                container: 'fieldgroupid13'
            });
            residential1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.STARTROW
            });
            var residential2 = form.addField({
                id: 'custpage_reach_qtyd1b',
                type: serverWidget.FieldType.TEXT,
                label: "Commercial",
                container: 'fieldgroupid13'
            });
            residential2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.ENDROW
            });
            ///
            var fieldgroup13b = form.addFieldGroup({
                id: 'fieldgroupid13b',
                label: 'hIDDEN'
            });
            fieldgroup13b.isBorderHidden = true;
            var webquec = form.addField({
                id: 'custpage_web_quec',
                type: serverWidget.FieldType.LABEL,
                label: '<b># of Renewal Attempts</b>',
                container: 'fieldgroupid13b'
            });
            webquec.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var residential1a = form.addField({
                id: 'custpage_web_que1c',
                type: serverWidget.FieldType.TEXT,
                label: "Residential",
                container: 'fieldgroupid13b'
            });
            residential1a.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.STARTROW
            });
            var residential2a = form.addField({
                id: 'custpage_reach_qtyd1c',
                type: serverWidget.FieldType.TEXT,
                label: "Commercial",
                container: 'fieldgroupid13b'
            });
            residential2a.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.ENDROW
            });

            var fieldgroup13c = form.addFieldGroup({
                id: 'fieldgroupid13c',
                label: 'hIDDEN'
            });
            fieldgroup13c.isBorderHidden = true;
            var webquec = form.addField({
                id: 'custpage_web_qued',
                type: serverWidget.FieldType.LABEL,
                label: '<b># of Customers Renewed</b>',
                container: 'fieldgroupid13c'
            });
            webquec.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var residential1a = form.addField({
                id: 'custpage_web_que1d',
                type: serverWidget.FieldType.TEXT,
                label: "Residential",
                container: 'fieldgroupid13c'
            });
            residential1a.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.STARTROW
            });
            var residential2a = form.addField({
                id: 'custpage_reach_qtyd1d',
                type: serverWidget.FieldType.TEXT,
                label: "Commercial",
                container: 'fieldgroupid13c'
            });
            residential2a.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.ENDROW
            });
            ///
            //
            var fieldgroup13d = form.addFieldGroup({
                id: 'fieldgroupid13d',
                label: 'Renewal'
            });
            fieldgroup13d.isBorderHidden = true;
            var renewalpct = form.addField({
                id: 'custpage_renewal_pct',
                type: serverWidget.FieldType.TEXT,
                label: 'Residential Renewal Percentage',
                container: 'fieldgroupid13d'
            });

            renewalpct.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            renewalpct.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            var comrenewalpct = form.addField({
                id: 'custpage_comrenewal_pct',
                type: serverWidget.FieldType.TEXT,
                label: 'Commercial Renewal Percentage',
                container: 'fieldgroupid13d'
            });
            comrenewalpct.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            comrenewalpct.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            var totalrenewalpct = form.addField({
                id: 'custpage_totrenewal_pct',
                type: serverWidget.FieldType.TEXT,
                label: 'Total Renewal Percentage',
                container: 'fieldgroupid13d'
            });
            totalrenewalpct.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            totalrenewalpct.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            var fieldgroup14 = form.addFieldGroup({
                id: 'fieldgroupid14',
                label: 'HIDDEN'
            });
            fieldgroup14.isBorderHidden = true;

            form
                .addField(
                    {
                        id: 'custpage_website',
                        type: serverWidget.FieldType.TEXT,
                        label: 'Not including your specific page from corporate, do you have a website dedicated specifically to holiday decorating business?',
                        container: 'fieldgroupid14'
                    }).updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.NORMAL
                    }).updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    }).updateDisplayType({
                        displayType: serverWidget.FieldDisplayType.INLINE
                    }).defaultValue = "";

            var prodrating1 = form.addField({
                id: 'custpage_rdoproductrating',
                type: serverWidget.FieldType.SELECT,
                label: ' ',
                source: 'customlist1438',
                container: 'fieldgroupid14'
            });
           /* var prodrating2 = form.addField({
                id: 'custpage_rdoproductrating',
                type: serverWidget.FieldType.RADIO,
                label: 'No',
                source: 'p2',
                container: 'fieldgroupid14'
            });

            prodrating1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            prodrating1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            prodrating2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            prodrating2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/
            var fieldgroup15 = form.addFieldGroup({
                id: 'fieldgroupid15',
                label: 'HIDDEN'
            });
            fieldgroup15.isBorderHidden = true;
            form.addField({
                id: 'custpage_afterhours',
                type: serverWidget.FieldType.TEXT,
                label: 'Do you have an "after hours" answering service? ',
                container: 'fieldgroupid15'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var afterhr1 = form.addField({
                id: 'custpage_afterhours1',
                type: serverWidget.FieldType.SELECT,
                label: ' ',
                source: 'customlist1438',
                container: 'fieldgroupid15'
            });
           /* var afterhr2 = form.addField({
                id: 'custpage_afterhours1',
                type: serverWidget.FieldType.RADIO,
                label: 'No',
                source: 'p2',
                container: 'fieldgroupid15'
            });

            afterhr1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            afterhr1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            afterhr2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            afterhr2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/
            var fieldgroup15a = form.addFieldGroup({
                id: 'fieldgroupid15a',
                label: 'Identify any/all media coverage you received this season. (check all that apply) '
            });
            //fieldgroup15a.isBorderHidden = true;
            form.addField({
                id: 'custpage_media',
                type: serverWidget.FieldType.TEXT,
                label: '  ',
                container: 'fieldgroupid15a'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var lmedia1 = form.addField({
                id: 'custpage_lmedia1',
                type: serverWidget.FieldType.MULTISELECT,
                label: 'Media Coverage',
              source:'customlist_mark_conv_mediacoverage',
                container: 'fieldgroupid15a'
            });
          /*  var lmedia2 = form.addField({
                id: 'custpage_lmedia2',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Local Newspaper',
                container: 'fieldgroupid15a'
            });
            var lmedia3 = form.addField({
                id: 'custpage_lmedia3',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Local TV News',
                container: 'fieldgroupid15a'
            });
            var lmedia4 = form.addField({
                id: 'custpage_lmedia4',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Local Periodical/Publication',
                container: 'fieldgroupid15a'
            });
            var lmedia5 = form.addField({
                id: 'custpage_lmedia5',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'National media',
                container: 'fieldgroupid15a'
            });
            var lmedia6 = form.addField({
                id: 'custpage_lmedia6',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Other',
                container: 'fieldgroupid15a'
            });
            var lmedia7 = form.addField({
                id: 'custpage_lmedia7',
                type: serverWidget.FieldType.TEXT,
                label: 'If you checked other please enter the media coverage received below',
                container: 'fieldgroupid15a'
            });

            lmedia1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            lmedia1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            lmedia2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            lmedia2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            lmedia3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            lmedia3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            lmedia4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            lmedia4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            lmedia5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            lmedia5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            lmedia6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            lmedia6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            lmedia7.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            lmedia7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

*/

            var fieldgroup16 = form.addFieldGroup({
                id: 'fieldgroupid16',
                label: 'Loyality Discount'
            });
            // fieldgroup16.isBorderHidden = true;
            form.addField({
                id: 'custpage_loyalty',
                type: serverWidget.FieldType.TEXT,
                label: 'Did you offer a "Client Loyality" or discount/incentive price for REINSTALL customers this season?',
                container: 'fieldgroupid16'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var loyalty1 = form.addField({
                id: 'custpage_loyalty1',
                type: serverWidget.FieldType.SELECT,
                label: ' ',
                source: 'customlist1438',
                container: 'fieldgroupid16'
            });
          /*  var loyalty2 = form.addField({
                id: 'custpage_loyalty1',
                type: serverWidget.FieldType.RADIO,
                label: 'No',
                source: 'p2',
                container: 'fieldgroupid16'
            });

            loyalty1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            loyalty1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            loyalty2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            loyalty2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/
            var fieldgroup17 = form.addFieldGroup({
                id: 'fieldgroupid17',
                label: 'If yes, what percentage discount did you offer? '
            });
            //  fieldgroup17.isBorderHidden = true;
           /* form
                .addField(
                    {
                        id: 'custpage_pctdsct',
                        type: serverWidget.FieldType.TEXT,
                        label: '  ',
                        container: 'fieldgroupid17'
                    }).updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.NORMAL
                    }).updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    }).updateDisplayType({
                        displayType: serverWidget.FieldDisplayType.INLINE
                    }).defaultValue = "";
*/
            var pctdsct1 = form.addField({
                id: 'custpage_pctdsct1',
                type: serverWidget.FieldType.PERCENT,
                label: 'Percentage of discount',
                container: 'fieldgroupid17'
            });
            /*var pctdsct2 = form.addField({
                id: 'custpage_pctdsct1',
                type: serverWidget.FieldType.RADIO,
                label: '11-15%',
                source: 'p2',
                container: 'fieldgroupid17'
            });
            var pctdsct3 = form.addField({
                id: 'custpage_pctdsct1',
                type: serverWidget.FieldType.RADIO,
                label: '16-20%',
                source: 'p3',
                container: 'fieldgroupid17'
            });
            var pctdsct4 = form.addField({
                id: 'custpage_pctdsct1',
                type: serverWidget.FieldType.RADIO,
                label: '21-25%',
                source: 'p4',
                container: 'fieldgroupid17'
            });
            var pctdsct5 = form.addField({
                id: 'custpage_pctdsct1',
                type: serverWidget.FieldType.RADIO,
                label: '26-30%',
                source: 'p5',
                container: 'fieldgroupid17'
            });
            var pctdsct6 = form.addField({
                id: 'custpage_pctdsct1',
                type: serverWidget.FieldType.RADIO,
                label: '31 or more',
                source: 'p6',
                container: 'fieldgroupid17'
            });

            pctdsct1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            pctdsct1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            pctdsct2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            pctdsct2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            pctdsct3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            pctdsct3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            pctdsct4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            pctdsct4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            pctdsct5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            pctdsct5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            pctdsct6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            pctdsct6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/

            var fieldgroup18 = form.addFieldGroup({
                id: 'fieldgroupid18',
                label: 'Decorated Family Program? '
            });
            //fieldgroup18.isBorderHidden = true;
            form.addField({
                id: 'custpage_dec_fly_pgm',
                type: serverWidget.FieldType.TEXT,
                label: 'Did you participate in the "Decorated Family Program" this season?',
                container: 'fieldgroupid18'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var flypgm1 = form.addField({
                id: 'custpage_dec_fly_pgm1',
                type: serverWidget.FieldType.SELECT,
                label: ' ',
                source: 'customlist1438',
                container: 'fieldgroupid18'
            });
            /*var flypgm2 = form.addField({
                id: 'custpage_dec_fly_pgm1',
                type: serverWidget.FieldType.RADIO,
                label: 'No',
                source: 'p2',
                container: 'fieldgroupid18'
            });

            flypgm1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            flypgm1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            flypgm2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            flypgm2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/
            var fieldgroup19 = form.addFieldGroup({
                id: 'fieldgroupid19',
                label: 'HIDDEN'
            });
            fieldgroup19.isBorderHidden = true;
            form
                .addField(
                    {
                        id: 'custpage__no_dec_fly_pgm',
                        type: serverWidget.FieldType.SELECT,
                        label: 'If No, please indicate why not.',
                        source:'customlist_mark_conv_dfpreason',
                        container: 'fieldgroupid19'
                    }).updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.NORMAL
                    }).updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    });
          /*.updateDisplayType({
                        displayType: serverWidget.FieldDisplayType.INLINE
                    }).defaultValue = "";

            var nofly1 = form.addField({
                id: 'custpage__no_dec_fly_pgm1',
                type: serverWidget.FieldType.RADIO,
                label: 'No candidates in my area',
                source: 'p1',
                container: 'fieldgroupid19'
            });
            var nofly2 = form.addField({
                id: 'custpage__no_dec_fly_pgm1',
                type: serverWidget.FieldType.RADIO,
                label: 'We did not want to participate',
                source: 'p2',
                container: 'fieldgroupid19'
            });
            var nofly3 = form.addField({
                id: 'custpage__no_dec_fly_pgm1',
                type: serverWidget.FieldType.RADIO,
                label: 'We did not have time to participate',
                source: 'p3',
                container: 'fieldgroupid19'
            });
            var nofly4 = form.addField({
                id: 'custpage__no_dec_fly_pgm1',
                type: serverWidget.FieldType.RADIO,
                label: 'We did not know about the program',
                source: 'p4',
                container: 'fieldgroupid19'
            });
            var nofly5 = form.addField({
                id: 'custpage__no_dec_fly_pgm2',
                type: serverWidget.FieldType.TEXT,
                label: 'OTHER',
                source: 'p5',
                container: 'fieldgroupid19'
            });

            nofly1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            nofly1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            nofly2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            nofly2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            nofly3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            nofly3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            nofly4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            nofly4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            nofly5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            nofly5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/

            var fieldgroup20 = form.addFieldGroup({
                id: 'fieldgroupid20',
                label: 'New efforts for New residential sales'
            });
            //fieldgroup20.isBorderHidden = true;
            form
                .addField(
                    {
                        id: 'custpage_mkt_eff',
                        type: serverWidget.FieldType.TEXT,
                        label: 'When did you begin your marketing efforts for NEW-RESIDENTIAL sales this season?',
                        container: 'fieldgroupid20'
                    }).updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.NORMAL
                    }).updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    }).updateDisplayType({
                        displayType: serverWidget.FieldDisplayType.INLINE
                    }).defaultValue = "";

            var mkteff1 = form.addField({
                id: 'custpage_mkt_eff1',
                type: serverWidget.FieldType.SELECT,
                label: 'Select from the list',
                source: 'customlist_mark_conv_efforts',
                container: 'fieldgroupid20'
            });
            /*var mkteff2 = form.addField({
                id: 'custpage_mkt_eff1',
                type: serverWidget.FieldType.RADIO,
                label: 'September',
                source: 'p2',
                container: 'fieldgroupid20'
            });
            var mkteff3 = form.addField({
                id: 'custpage_mkt_eff1',
                type: serverWidget.FieldType.RADIO,
                label: 'October 1-15th',
                source: 'p3',
                container: 'fieldgroupid20'
            });
            var mkteff4 = form.addField({
                id: 'custpage_mkt_eff1',
                type: serverWidget.FieldType.RADIO,
                label: 'October 16-31st',
                source: 'p4',
                container: 'fieldgroupid20'
            });
            var mkteff5 = form.addField({
                id: 'custpage_mkt_eff1',
                type: serverWidget.FieldType.RADIO,
                label: 'November 1-10th',
                source: 'p5',
                container: 'fieldgroupid20'
            });
            var mkteff6 = form.addField({
                id: 'custpage_mkt_eff1',
                type: serverWidget.FieldType.RADIO,
                label: 'After November 11th',
                source: 'p6',
                container: 'fieldgroupid20'
            });
            var mkteff7 = form.addField({
                id: 'custpage_mkt_eff1',
                type: serverWidget.FieldType.RADIO,
                label: 'We didnt market this season',
                source: 'p7',
                container: 'fieldgroupid20'
            });

            mkteff1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            mkteff1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            mkteff2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            mkteff2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            mkteff3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            mkteff3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            mkteff4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            mkteff4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            mkteff5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            mkteff5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            mkteff6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            mkteff6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            mkteff7.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            mkteff7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/

            var fieldgroup21 = form.addFieldGroup({
                id: 'fieldgroupid21',
                label: 'ELF Dollars'
            });
            // fieldgroup21.isBorderHidden = true;
            form.addField({
                id: 'custpage_elf_dlr',
                type: serverWidget.FieldType.TEXT,
                label: 'Do you offer ELF DOLLARS to Reinstall customers?',
                container: 'fieldgroupid21'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var elfdle1 = form.addField({
                id: 'custpage_elf_dlr1',
                type: serverWidget.FieldType.SELECT,
                label: ' ',
                source: 'customlist1438',
                container: 'fieldgroupid21'
            });
           /* var elfdle2 = form.addField({
                id: 'custpage_elf_dlr1',
                type: serverWidget.FieldType.RADIO,
                label: 'No',
                source: 'p2',
                container: 'fieldgroupid21'
            });

            elfdle1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            elfdle1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            elfdle2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            elfdle2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/
            var fieldgroup22 = form.addFieldGroup({
                id: 'fieldgroupid22',
                label: 'What improvement, if any, would you like to see to the Christmas Decor Marketing Program?'
            });
            // fieldgroup22.isBorderHidden = true;

            form.addField({
                id: 'custpage_improv',
                type: serverWidget.FieldType.TEXTAREA,
                label: '   ',
                container: 'fieldgroupid22'
            });

            var fieldgroup23 = form.addFieldGroup({
                id: 'fieldgroupid23',
                label: 'Customer Count and Revenue Input: '
            });


            //var label = fieldgroup.label;
            var webque23 = form.addField({
                id: 'custpage_web_que23',
                type: serverWidget.FieldType.LABEL,
                label: '<b>Residential - NEW - Service</b>',
                container: 'fieldgroupid23'
            });
            webque23.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            var newsrv1 = form.addField({
                id: 'custpage_web_newsrv1',
                type: serverWidget.FieldType.TEXT,
                label: "# Customers",
                container: 'fieldgroupid23'
            });
            newsrv1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var newsrv2 = form.addField({
                id: 'custpage_web_newsrv2',
                type: serverWidget.FieldType.TEXT,
                label: "$ Revenue",
                container: 'fieldgroupid23'
            });
            newsrv2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            ///
            var fieldgroup23a = form.addFieldGroup({
                id: 'fieldgroupid23a',
                label: 'hIDDEN'
            });
            fieldgroup23a.isBorderHidden = true;
            var webque23a = form.addField({
                id: 'custpage_web_que23a',
                type: serverWidget.FieldType.LABEL,
                label: '<b>Residential - RENEWAL - Service</b>',
                container: 'fieldgroupid23a'
            });
            webque23a.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var rrs1 = form.addField({
                id: 'custpage_web_rrs1',
                type: serverWidget.FieldType.TEXT,
                label: "# Customers",
                container: 'fieldgroupid23a'
            });
            rrs1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var rrs2 = form.addField({
                id: 'custpage_reach_rrs2',
                type: serverWidget.FieldType.TEXT,
                label: "$ Revenue",
                container: 'fieldgroupid23a'
            });
            rrs2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            ////
            var fieldgroup23b = form.addFieldGroup({
                id: 'fieldgroupid23b',
                label: 'hIDDEN'
            });
            fieldgroup23b.isBorderHidden = true;
            var webque23b = form.addField({
                id: 'custpage_web_que23b',
                type: serverWidget.FieldType.LABEL,
                label: '<b>Residential - NEW - Ownership</b>',
                container: 'fieldgroupid23b'
            });
            webque23b.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var newown1 = form.addField({
                id: 'custpage_web_newown1',
                type: serverWidget.FieldType.TEXT,
                label: "# Customers",
                container: 'fieldgroupid23b'
            });
            newown1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var newown2 = form.addField({
                id: 'custpage_web_newown2',
                type: serverWidget.FieldType.TEXT,
                label: "$ Revenue",
                container: 'fieldgroupid23b'
            });
            newown2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            var fieldgroup23c = form.addFieldGroup({
                id: 'fieldgroupid23c',
                label: 'hIDDEN'
            });
            fieldgroup23c.isBorderHidden = true;
            var webque23c = form.addField({
                id: 'custpage_web_que23c',
                type: serverWidget.FieldType.LABEL,
                label: '<b>Residential - RENEWAL - Ownership</b>',
                container: 'fieldgroupid23c'
            });
            webque23c.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var rennown1 = form.addField({
                id: 'custpage_web_rennown1',
                type: serverWidget.FieldType.TEXT,
                label: "# Customers",
                container: 'fieldgroupid23c'
            });
            rennown1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var rennown2 = form.addField({
                id: 'custpage_web_rennown2',
                type: serverWidget.FieldType.TEXT,
                label: "$ Revenue",
                container: 'fieldgroupid23c'
            });
            rennown2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            var fieldgroup23d = form.addFieldGroup({
                id: 'fieldgroupid23d',
                label: 'hIDDEN'
            });
            fieldgroup23d.isBorderHidden = true;
            var webque23d = form.addField({
                id: 'custpage_web_que23d',
                type: serverWidget.FieldType.LABEL,
                label: '<b>Commercial - NEW - Service</b>',
                container: 'fieldgroupid23d'
            });
            webque23d.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var comserv1 = form.addField({
                id: 'custpage_web_comserv1',
                type: serverWidget.FieldType.TEXT,
                label: "# Customers",
                container: 'fieldgroupid23d'
            });
            comserv1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var comserv2 = form.addField({
                id: 'custpage_web_comserv2',
                type: serverWidget.FieldType.TEXT,
                label: "$ Revenue",
                container: 'fieldgroupid23d'
            });
            comserv2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            var fieldgroup23e = form.addFieldGroup({
                id: 'fieldgroupid23e',
                label: 'hIDDEN'
            });
            fieldgroup23e.isBorderHidden = true;
            var webque23e = form.addField({
                id: 'custpage_web_que23e',
                type: serverWidget.FieldType.LABEL,
                label: '<b>Commercial - RENEWAL - Service</b>',
                container: 'fieldgroupid23e'
            });
            webque23d.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var comrserv1 = form.addField({
                id: 'custpage_web_comrserv1',
                type: serverWidget.FieldType.TEXT,
                label: "# Customers",
                container: 'fieldgroupid23e'
            });
            comrserv1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var comrserv2 = form.addField({
                id: 'custpage_web_comrserv2',
                type: serverWidget.FieldType.TEXT,
                label: "$ Revenue",
                container: 'fieldgroupid23e'
            });
            comrserv2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            var fieldgroup23f = form.addFieldGroup({
                id: 'fieldgroupid23f',
                label: 'hIDDEN'
            });
            fieldgroup23f.isBorderHidden = true;
            var webque23f = form.addField({
                id: 'custpage_web_que23f',
                type: serverWidget.FieldType.LABEL,
                label: '<b>Commercial - NEW - Ownership</b>',
                container: 'fieldgroupid23f'
            });
            webque23f.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var comnown1 = form.addField({
                id: 'custpage_web_comnown1',
                type: serverWidget.FieldType.TEXT,
                label: "# Customers",
                container: 'fieldgroupid23f'
            });
            comnown1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var comnown2 = form.addField({
                id: 'custpage_web_comnown2',
                type: serverWidget.FieldType.TEXT,
                label: "$ Revenue",
                container: 'fieldgroupid23f'
            });
            comnown2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            var fieldgroup23g = form.addFieldGroup({
                id: 'fieldgroupid23g',
                label: 'hIDDEN'
            });
            fieldgroup23g.isBorderHidden = true;
            var webque23g = form.addField({
                id: 'custpage_web_que23g',
                type: serverWidget.FieldType.LABEL,
                label: '<b>Commercial - RENEWAL - Ownership</b>',
                container: 'fieldgroupid23g'
            });
            webque23g.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            });

            var comrenown1 = form.addField({
                id: 'custpage_web_comrenown1',
                type: serverWidget.FieldType.TEXT,
                label: "# Customers",
                container: 'fieldgroupid23g'
            });
            comrenown1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });
            var comrenown2 = form.addField({
                id: 'custpage_web_comrenown2',
                type: serverWidget.FieldType.TEXT,
                label: "$ Revenue",
                container: 'fieldgroupid23g'
            });
            comrenown2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTCOL
            });

            ///
            //
            var fieldgroup23h = form.addFieldGroup({
                id: 'fieldgroupid23h',
                label: '  '
            });
            fieldgroup23h.isBorderHidden = true;
            var totren = form.addField({
                id: 'custpage_totren',
                type: serverWidget.FieldType.TEXT,
                label: 'Total: NEW Revenue',
                container: 'fieldgroupid23h'
            });

            totren.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            totren.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            var totrenrev = form.addField({
                id: 'custpage_totrenrev',
                type: serverWidget.FieldType.TEXT,
                label: 'Total: RENEWAL Revenue ',
                container: 'fieldgroupid23h'
            });
            totrenrev.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            totrenrev.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            var totresrev = form.addField({
                id: 'custpage_totresrev',
                type: serverWidget.FieldType.TEXT,
                label: 'Total: Residential Revenue',
                container: 'fieldgroupid23h'
            });
            totresrev.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            totresrev.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });


            var totcomrev = form.addField({
                id: 'custpage_totcomrev',
                type: serverWidget.FieldType.TEXT,
                label: 'Total: Commercial Revenue',
                container: 'fieldgroupid23h'
            });
            totcomrev.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            totcomrev.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            var totrev = form.addField({
                id: 'custpage_totrev',
                type: serverWidget.FieldType.TEXT,
                label: 'Total Revenue:',
                container: 'fieldgroupid23h'
            });
            totrev.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            totrev.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });


            var fieldgroup24 = form.addFieldGroup({
                id: 'fieldgroupid24',
                label: 'Declined Sales'
            });
            //fieldgroup20.isBorderHidden = true;
            form.addField({
                id: 'custpage_com_obj',
                type: serverWidget.FieldType.TEXT,
                label: 'On sales you DID NOT CLOSE (declined sales) what was the most common objection?',
                container: 'fieldgroupid24'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var comobj1 = form.addField({
                id: 'custpage_mkt_comobj1',
                type: serverWidget.FieldType.SELECT,
                label: 'Select from the list',
                source: 'customlist_mark_sales_fail',
                container: 'fieldgroupid24'
            });
           /* var comobj2 = form.addField({
                id: 'custpage_mkt_comobj1',
                type: serverWidget.FieldType.RADIO,
                label: 'Schedule',
                source: 'p2',
                container: 'fieldgroupid24'
            });
            var comobj3 = form.addField({
                id: 'custpage_mkt_comobj1',
                type: serverWidget.FieldType.RADIO,
                label: 'Products',
                source: 'p3',
                container: 'fieldgroupid24'
            });
            var comobj4 = form.addField({
                id: 'custpage_mkt_comobj1',
                type: serverWidget.FieldType.RADIO,
                label: 'Designs',
                source: 'p4',
                container: 'fieldgroupid24'
            });
            var comobj5 = form.addField({
                id: 'custpage_mkt_comobj2',
                type: serverWidget.FieldType.TEXT,
                label: 'OTHERS',
                container: 'fieldgroupid24'
            });


            comobj1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            comobj1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            comobj2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            comobj2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            comobj3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            comobj3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            comobj4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            comobj4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            comobj5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            comobj5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

*/
            var fieldgroup25 = form.addFieldGroup({
                id: 'fieldgroupid25',
                label: 'Residential Renewals'
            });
            //fieldgroup20.isBorderHidden = true;
            form.addField({
                id: 'custpage_beg_renres',
                type: serverWidget.FieldType.TEXT,
                label: 'When did you begin your residential "renewals"? ',
                container: 'fieldgroupid25'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var renres1 = form.addField({
                id: 'custpage_mkt_renres1',
                type: serverWidget.FieldType.SELECT,
                label: 'Renewal Season',
                source: 'customlist_mark_sales_renewals',
                container: 'fieldgroupid25'
            });
            /*var renres2 = form.addField({
                id: 'custpage_mkt_renres1',
                type: serverWidget.FieldType.RADIO,
                label: 'Apr - June',
                source: 'p2',
                container: 'fieldgroupid25'
            });
            var renres3 = form.addField({
                id: 'custpage_mkt_renres1',
                type: serverWidget.FieldType.RADIO,
                label: 'July - August',
                source: 'p3',
                container: 'fieldgroupid25'
            });
            var renres4 = form.addField({
                id: 'custpage_mkt_renres1',
                type: serverWidget.FieldType.RADIO,
                label: 'September',
                source: 'p4',
                container: 'fieldgroupid25'
            });
            var renres5 = form.addField({
                id: 'custpage_mkt_renres1',
                type: serverWidget.FieldType.RADIO,
                label: 'After September',
                source: 'p5',
                container: 'fieldgroupid25'
            });
            var renres6 = form.addField({
                id: 'custpage_mkt_renres1',
                type: serverWidget.FieldType.RADIO,
                label: 'We are new this season, no Renewals',
                source: 'p6',
                container: 'fieldgroupid25'
            });


            renres1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            renres1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            renres2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            renres2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            renres3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            renres3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            renres4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            renres4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            renres5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            renres5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            renres6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            renres6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/
            var fieldgroup26 = form.addFieldGroup({
                id: 'fieldgroupid26',
                label: 'Percentage of customers renewed prior to September'
            });
            //fieldgroup20.isBorderHidden = true;
            form.addField({
                id: 'custpage_beg_custpct',
                type: serverWidget.FieldType.TEXT,
                label: 'If you approached renewals PRIOR to September, what % of your customers actually RENEWED prior to September? ',
                container: 'fieldgroupid26'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var custpct1 = form.addField({
                id: 'custpage_mkt_custpct1',
                type: serverWidget.FieldType.SELECT,
                label: 'Renewed Percentage',
                source: 'customlist_mark_sales_priorrenewals',
                container: 'fieldgroupid26'
            });
            /*var custpct2 = form.addField({
                id: 'custpage_mkt_custpct1',
                type: serverWidget.FieldType.RADIO,
                label: '11-25%',
                source: 'p2',
                container: 'fieldgroupid26'
            });
            var custpct3 = form.addField({
                id: 'custpage_mkt_custpct1',
                type: serverWidget.FieldType.RADIO,
                label: '25-50%',
                source: 'p3',
                container: 'fieldgroupid26'
            });
            var custpct4 = form.addField({
                id: 'custpage_mkt_custpct1',
                type: serverWidget.FieldType.RADIO,
                label: '51-75%',
                source: 'p4',
                container: 'fieldgroupid26'
            });
            var custpct5 = form.addField({
                id: 'custpage_mkt_custpct1',
                type: serverWidget.FieldType.RADIO,
                label: '76 -100% +',
                source: 'p5',
                container: 'fieldgroupid26'
            });
            var custpct6 = form.addField({
                id: 'custpage_mkt_custpct1',
                type: serverWidget.FieldType.RADIO,
                label: 'N/A',
                source: 'p6',
                container: 'fieldgroupid26'
            });


            custpct1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            custpct1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            custpct2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            custpct2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            custpct3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            custpct3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            custpct4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            custpct4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            custpct5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            custpct5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            custpct6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            custpct6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

*/
            var fieldgroup27 = form.addFieldGroup({
                id: 'fieldgroupid27',
                label: '# of payments offered'
            });
            //fieldgroup20.isBorderHidden = true;
            form.addField({
                id: 'custpage_inspay',
                type: serverWidget.FieldType.TEXT,
                label: 'How many installment payments did you offer your RENEWAL customers this season? ',
                container: 'fieldgroupid27'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var inspay1 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.SELECT,
                label: 'Renewal Installs',
                source: 'customlist_mark_sales_installs',
                container: 'fieldgroupid27'
            });
           /* var inspay2 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '3',
                source: 'p2',
                container: 'fieldgroupid27'
            });
            var inspay3 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '4',
                source: 'p3',
                container: 'fieldgroupid27'
            });
            var inspay4 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '5%',
                source: 'p4',
                container: 'fieldgroupid27'
            });
            var inspay5 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '6',
                source: 'p5',
                container: 'fieldgroupid27'
            });
            var inspay6 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '7',
                source: 'p6',
                container: 'fieldgroupid27'
            });
            var inspay7 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '8',
                source: 'p6',
                container: 'fieldgroupid27'
            });
            var inspay8 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '9',
                source: 'p6',
                container: 'fieldgroupid27'
            });
            var inspay9 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '10',
                source: 'p6',
                container: 'fieldgroupid27'
            });
            var inspay10 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '11',
                source: 'p6',
                container: 'fieldgroupid27'
            });
            var inspay11 = form.addField({
                id: 'custpage_mkt_inspay1',
                type: serverWidget.FieldType.RADIO,
                label: '12',
                source: 'p6',
                container: 'fieldgroupid27'
            });
          
            var inspay12 = form.addField({
                id: 'custpage_mkt_inspay12',
                type: serverWidget.FieldType.TEXT,
                label: 'OTHER',
                container: 'fieldgroupid27'
            }); 

            inspay1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            inspay2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            inspay3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            inspay4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            inspay5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            inspay6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            inspay7.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            inspay8.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay8.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            inspay9.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay9.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            inspay10.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay10.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            inspay11.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay11.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            inspay12.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            inspay12.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/

			var fieldgroup28 = form.addFieldGroup({
                id: 'fieldgroupid28',
                label: 'Multi year agreement'
            });
            //fieldgroup20.isBorderHidden = true;
            form.addField({
                id: 'custpage_multiyear',
                type: serverWidget.FieldType.TEXT,
                label: 'What percentage of your customers take advantage of "Multi-year" agreements?',
                container: 'fieldgroupid28'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var multiyear1 = form.addField({
                id: 'custpage_mkt_multiyear1',
                type: serverWidget.FieldType.SELECT,
                label: 'Select the %',
                source: 'customlist_mark_sales_myagreements',
                container: 'fieldgroupid28'
            });
           /* var multiyear2 = form.addField({
                id: 'custpage_mkt_multiyear1',
                type: serverWidget.FieldType.RADIO,
                label: '0-10%',
                source: 'p2',
                container: 'fieldgroupid28'
            });
            var multiyear3 = form.addField({
                id: 'custpage_mkt_multiyear1',
                type: serverWidget.FieldType.RADIO,
                label: '11-25%',
                source: 'p3',
                container: 'fieldgroupid28'
            });
            var multiyear4 = form.addField({
                id: 'custpage_mkt_multiyear1',
                type: serverWidget.FieldType.RADIO,
                label: '25-50%',
                source: 'p4',
                container: 'fieldgroupid28'
            });
            var multiyear5 = form.addField({
                id: 'custpage_mkt_multiyear1',
                type: serverWidget.FieldType.RADIO,
                label: '51-75%',
                source: 'p5',
                container: 'fieldgroupid28'
            });
            var multiyear6 = form.addField({
                id: 'custpage_mkt_multiyear1',
                type: serverWidget.FieldType.RADIO,
                label: '76% +',
                source: 'p6',
                container: 'fieldgroupid28'
            });
          
          multiyear1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            multiyear1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
          multiyear2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            multiyear2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
          multiyear3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            multiyear3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
          multiyear4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            multiyear4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
          multiyear5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            multiyear5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
          multiyear6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            multiyear6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
*/
          
          // Add Check Table///
          // 
                      var fieldgroup29 = form.addFieldGroup({
                id: 'fieldgroupid29',
                label:   'Late Season Business'
            });
            //fieldgroup20.isBorderHidden = true;
            form.addField({
                id: 'custpage_close_bs',
                type: serverWidget.FieldType.TEXT,
                label: 'What techniques did you use to close LATE season business (after 12/10)?',
                container: 'fieldgroupid29'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var close_bs1 = form.addField({
                id: 'custpage_close_bs1',
                type: serverWidget.FieldType.SELECT,
                label: 'Select the technique used',
                source: 'customlist_mark_sales_late',
                container: 'fieldgroupid29'
            });
           /* var close_bs2 = form.addField({
                id: 'custpage_close_bs1',
                type: serverWidget.FieldType.RADIO,
                label: 'Discounted more agressively',
                source: 'p2',
                container: 'fieldgroupid29'
            });
            var close_bs3 = form.addField({
                id: 'custpage_close_bs1',
                type: serverWidget.FieldType.RADIO,
                label: 'Didnt discount at all',
                source: 'p3',
                container: 'fieldgroupid29'
            });
            var close_bs4 = form.addField({
                id: 'custpage_close_bs1',
                type: serverWidget.FieldType.RADIO,
                label: 'Too busy to respond to late season leads',
                source: 'p4',
                container: 'fieldgroupid29'
            });
            var close_bs5 = form.addField({
                id: 'custpage_close_bs1',
                type: serverWidget.FieldType.RADIO,
                label: 'Install crews too booked to sell late season leads',
                source: 'p5',
                container: 'fieldgroupid29'
            });
            var close_bs6 = form.addField({
                id: 'custpage_close_bs1',
                type: serverWidget.FieldType.RADIO,
                label: 'Install crews too booked but sold for next season',
                source: 'p6',
                container: 'fieldgroupid29'
            });
            var close_bs7 = form.addField({
                id: 'custpage_close_bs1',
                type: serverWidget.FieldType.RADIO,
                label: 'Didnt get any late season leads',
                source: 'p6',
                container: 'fieldgroupid29'
            });
      
          
            var close_bs8 = form.addField({
                  id: 'custpage_close_bs8',
                type: serverWidget.FieldType.TEXT,
                label: 'OTHER',
                container: 'fieldgroupid29'
            }); 

            close_bs1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_bs1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            close_bs2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_bs2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            close_bs3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_bs3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            close_bs4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_bs4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            close_bs5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_bs5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            close_bs6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_bs6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            close_bs7.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_bs7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            close_bs8.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_bs8.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            */
          
                              var fieldgroup30 = form.addFieldGroup({
                id: 'fieldgroupid30',
                label: '% of late business closed'
            });
            //fieldgroup20.isBorderHidden = true;
            form.addField({
                id: 'custpage_close_pct',
                type: serverWidget.FieldType.TEXT,
                label: 'What percent of LATE season leads did you close? ',
                container: 'fieldgroupid30'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var close_pct1 = form.addField({
                id: 'custpage_close_pct1',
                type: serverWidget.FieldType.SELECT,
                label: 'Percentage Closed',
                source: 'customlist_mark_sales_myagreements',
                container: 'fieldgroupid30'
            });
            /*var close_pct2 = form.addField({
                id: 'custpage_close_pct1',
                type: serverWidget.FieldType.RADIO,
                label: '11-25%',
                source: 'p2',
                container: 'fieldgroupid30'
            });
            var close_pct3 = form.addField({
                id: 'custpage_close_pct1',
                type: serverWidget.FieldType.RADIO,
                label: '26-35%',
                source: 'p3',
                container: 'fieldgroupid30'
            });
            var close_pct4 = form.addField({
                id: 'custpage_close_pct1',
                type: serverWidget.FieldType.RADIO,
                label: '36-50%',
                source: 'p4',
                container: 'fieldgroupid30'
            });
            var close_pct5 = form.addField({
                id: 'custpage_close_pct1',
                type: serverWidget.FieldType.RADIO,
                label: '51-75% +',
                source: 'p5',
                container: 'fieldgroupid30'
            });
            var close_pct6 = form.addField({
                id: 'custpage_close_pct1',
                type: serverWidget.FieldType.RADIO,
                label: '76% +',
                source: 'p6',
                container: 'fieldgroupid30'
            });
      

            close_pct1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_pct1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            close_pct2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_pct2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            close_pct3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_pct3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            close_pct4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_pct4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            close_pct5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_pct5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            close_pct6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            close_pct6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
          */
        // ADD SALES ON
        // 
        var fieldgroup31 = form.addFieldGroup({
                id: 'fieldgroupid31',
                label: 'ADD ON Options'
            });
            //fieldgroup20.isBorderHidden = true;
            form.addField({
                id: 'custpage_addon',
                type: serverWidget.FieldType.TEXT,
                label: 'Did you actively approach all existing customers with add-on options?',
                container: 'fieldgroupid31'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var addon1 = form.addField({
                id: 'custpage_addon1',
                type: serverWidget.FieldType.SELECT,
                label: ' ',
                source: 'customlist1438',
                container: 'fieldgroupid31'
            });
           /* var addon2 = form.addField({
                id: 'custpage_addon1',
                type: serverWidget.FieldType.RADIO,
                label: 'No',
                source: 'p2',
                container: 'fieldgroupid31'
            });
           addon1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
 addon2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

*/

            var fieldgroup32 = form.addFieldGroup({
                id: 'fieldgroupid32',
                label: 'What products did you offer as your add-ons to existing renewal customers this season? (check all that apply).  '
            });
            //fieldgroup15a.isBorderHidden = true;
          /*  form.addField({
                id: 'custpage_addon_prod',
                type: serverWidget.FieldType.TEXT,
                label: '  ',
                container: 'fieldgroupid32'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";
*/
            var addon_prod1 = form.addField({
                id: 'custpage_addon_prod1',
                type: serverWidget.FieldType.SELECT,
                label: 'Add Ons',
                source:'customlist_mark_sales_addonprod',
                container: 'fieldgroupid32'
            });
            /*var addon_prod2 = form.addField({
                id: 'custpage_addon_prod2',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Greenery Enhancements (picks, mesh, bows, illuminated bows)',
                container: 'fieldgroupid32'
            });
            var addon_prod3 = form.addField({
                id: 'custpage_addon_prod3',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'ColorSplash',
                container: 'fieldgroupid32'
            });
            var addon_prod4 = form.addField({
                id: 'custpage_addon_prod4',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Formations',
                container: 'fieldgroupid32'
            });
            var addon_prod5 = form.addField({
                id: 'custpage_addon_prod5',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Illuminations',
                container: 'fieldgroupid32'
            });
            var addon_prod6 = form.addField({
                id: 'custpage_addon_prod6',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Ornamentations',
                container: 'fieldgroupid32'
            });
            var addon_prod7 = form.addField({
                id: 'custpage_addon_prod7',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Displays (3D & 2D illuminated, Hanging & Folding stars, etc)',
                container: 'fieldgroupid32'
            });
            var addon_prod8 = form.addField({
                id: 'custpage_addon_prod8',
                type: serverWidget.FieldType.CHECKBOX,
                label: 'Indoor Tree',
                container: 'fieldgroupid32'
            });

            addon_prod1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon_prod1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            addon_prod2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon_prod2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            addon_prod3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon_prod3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            addon_prod4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon_prod4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            addon_prod5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon_prod5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            addon_prod6.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon_prod6.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            addon_prod7.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon_prod7.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            addon_prod8.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            addon_prod8.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            */
            ///

            var fieldgroup33 = form.addFieldGroup({
                id: 'fieldgroupid33',
                label: 'What % of of your Residential RENEWAL customers added items to their display this season?   '
            });
            //fieldgroup20.isBorderHidden = true;
          /*  form.addField({
                id: 'custpage_item_add',
                type: serverWidget.FieldType.TEXT,
                label: '  ',
                container: 'fieldgroupid33'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";
*/
            var item_add1 = form.addField({
                id: 'custpage_item_add1',
                type: serverWidget.FieldType.SELECT,
                label: 'Residential Renewal %',
                source: 'customlist_mark_sales_addonperc',
                container: 'fieldgroupid33'
            });
            /*var item_add2 = form.addField({
                id: 'custpage_item_add1',
                type: serverWidget.FieldType.RADIO,
                label: '11-20%',
                source: 'p2',
                container: 'fieldgroupid33'
            });
            var item_add3 = form.addField({
                id: 'custpage_item_add1',
                type: serverWidget.FieldType.RADIO,
                label: '21-30%',
                source: 'p3',
                container: 'fieldgroupid33'
            });
            var item_add4 = form.addField({
                id: 'custpage_item_add1',
                type: serverWidget.FieldType.RADIO,
                label: '31-50%',
                source: 'p4',
                container: 'fieldgroupid33'
            });
            var item_add5 = form.addField({
                id: 'custpage_item_add1',
                type: serverWidget.FieldType.RADIO,
                label: '51 +',
                source: 'p5',
                container: 'fieldgroupid33'
            });
      

            item_add1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            item_add1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            item_add2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            item_add2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            item_add3.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            item_add3.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            item_add4.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            item_add4.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
            item_add5.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            item_add5.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });
           */
//////

var fieldgroup34 = form.addFieldGroup({
    id: 'fieldgroupid34',
    label: 'What was the average dollar amount of new add-on items for Residential RENEWAL customers this season?   '
});
//fieldgroup20.isBorderHidden = true;
/*form.addField({
    id: 'custpage_item_addon',
    type: serverWidget.FieldType.TEXT,
    label: '  ',
    container: 'fieldgroupid34'
}).updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.NORMAL
}).updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
}).updateDisplayType({
    displayType: serverWidget.FieldDisplayType.INLINE
}).defaultValue = "";
*/
var item_addon1 = form.addField({
    id: 'custpage_item_addon1',
    type: serverWidget.FieldType.SELECT,
    label: 'Add On Dollars',
    source: 'customlist_mark_sales_addondollars',
    container: 'fieldgroupid34'
});
/*var item_addon2 = form.addField({
    id: 'custpage_item_addon1',
    type: serverWidget.FieldType.RADIO,
    label: '$101-$350',
    source: 'p2',
    container: 'fieldgroupid34'
});
var item_addon3 = form.addField({
    id: 'custpage_item_addon1',
    type: serverWidget.FieldType.RADIO,
    label: '$351-$500',
    source: 'p3',
    container: 'fieldgroupid34'
});
var item_addon4 = form.addField({
    id: 'custpage_item_addon1',
    type: serverWidget.FieldType.RADIO,
    label: '$501-$1,000',
    source: 'p4',
    container: 'fieldgroupid34'
});
var item_addon5 = form.addField({
    id: 'custpage_item_addon1',
    type: serverWidget.FieldType.RADIO,
    label: '$1001 +',
    source: 'p5',
    container: 'fieldgroupid34'
});


item_addon1.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

item_addon1.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

item_addon2.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

item_addon2.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

item_addon3.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

item_addon3.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
item_addon4.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

item_addon4.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
item_addon5.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

item_addon5.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

*/
//

var fieldgroup35 = form.addFieldGroup({
    id: 'fieldgroupid35',
    label: 'Product Information<br\><br\><b>What is the total number of employees in ALL FACETS (includes your core) of your business during the peak of your busiest time of the year?</b>'
});
//fieldgroup20.isBorderHidden = true;
form.addField({
    id: 'custpage_total_emp',
    type: serverWidget.FieldType.TEXT,
    label: '  ',
    container: 'fieldgroupid34'
}).updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.NORMAL
}).updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
}).updateDisplayType({
    displayType: serverWidget.FieldDisplayType.INLINE
}).defaultValue = "";

var total_emp1 = form.addField({
    id: 'custpage_total_emp1',
    type: serverWidget.FieldType.SELECT,
    label: 'No of Employees',
    source: 'customlist_mark_pi_facets',
    container: 'fieldgroupid35'
});
/*var total_emp2 = form.addField({
    id: 'custpage_total_emp1',
    type: serverWidget.FieldType.RADIO,
    label: '$101-$350',
    source: 'p2',
    container: 'fieldgroupid35'
});
var total_emp3 = form.addField({
    id: 'custpage_total_emp1',
    type: serverWidget.FieldType.RADIO,
    label: '$351-$500',
    source: 'p3',
    container: 'fieldgroupid35'
});
var total_emp4 = form.addField({
    id: 'custpage_total_emp1',
    type: serverWidget.FieldType.RADIO,
    label: '$501-$1,000',
    source: 'p4',
    container: 'fieldgroupid35'
});
var total_emp5 = form.addField({
    id: 'custpage_total_emp1',
    type: serverWidget.FieldType.RADIO,
    label: '$1001 +',
    source: 'p5',
    container: 'fieldgroupid35'
});


total_emp1.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

total_emp1.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

total_emp2.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

total_emp2.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

total_emp3.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

total_emp3.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
total_emp4.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

total_emp4.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
total_emp5.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

total_emp5.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
*/
/////

var fieldgroup36 = form.addFieldGroup({
    id: 'fieldgroupid36',
    label: 'What is the total number of CHRISTMAS related employees during the peak of your busiest time of the year?'
});
//fieldgroup20.isBorderHidden = true;
/*form.addField({
    id: 'custpage_christotal_emp',
    type: serverWidget.FieldType.TEXT,
    label: '  ',
    container: 'fieldgroupid36'
}).updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.NORMAL
}).updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
}).updateDisplayType({
    displayType: serverWidget.FieldDisplayType.INLINE
}).defaultValue = "";
*/
var christotal_emp1 = form.addField({
    id: 'custpage_christotal_emp1',
    type: serverWidget.FieldType.SELECT,
    label: 'Total Employees (Christmas)',
    source: 'customlist_mark_pi_facets',
    container: 'fieldgroupid36'
});
/*var christotal_emp2 = form.addField({
    id: 'custpage_christotal_emp1',
    type: serverWidget.FieldType.RADIO,
    label: '5-9',
    source: 'p2',
    container: 'fieldgroupid36'
});
var christotal_emp3 = form.addField({
    id: 'custpage_christotal_emp1',
    type: serverWidget.FieldType.RADIO,
    label: '10-24',
    source: 'p3',
    container: 'fieldgroupid36'
});
var christotal_emp4 = form.addField({
    id: 'custpage_christotal_emp1',
    type: serverWidget.FieldType.RADIO,
    label: '25-49',
    source: 'p4',
    container: 'fieldgroupid36'
});
var christotal_emp5 = form.addField({
    id: 'custpage_christotal_emp1',
    type: serverWidget.FieldType.RADIO,
    label: '50 +',
    source: 'p5',
    container: 'fieldgroupid36'
});


christotal_emp1.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

christotal_emp1.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

christotal_emp2.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

christotal_emp2.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

christotal_emp3.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

christotal_emp3.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
christotal_emp4.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

christotal_emp4.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
christotal_emp5.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

christotal_emp5.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
*/
/////

var fieldgroup37 = form.addFieldGroup({
    id: 'fieldgroupid37',
    label: 'What was your average size Installation Crew?'
});
//fieldgroup20.isBorderHidden = true;
form.addField({
    id: 'custpage_instcrew',
    type: serverWidget.FieldType.TEXT,
    label: '  ',
    container: 'fieldgroupid37'
}).updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.NORMAL
}).updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
}).updateDisplayType({
    displayType: serverWidget.FieldDisplayType.INLINE
}).defaultValue = "";

var instcrew1 = form.addField({
    id: 'custpage_instcrew1',
    type: serverWidget.FieldType.RADIO,
    label: '2',
    source: '2',
    container: 'fieldgroupid37'
});
var instcrew2 = form.addField({
    id: 'custpage_instcrew1',
    type: serverWidget.FieldType.RADIO,
    label: '2.5 (use 2 and 3)',
    source: '2',
    container: 'fieldgroupid37'
});
var instcrew3 = form.addField({
    id: 'custpage_instcrew1',
    type: serverWidget.FieldType.RADIO,
    label: '3',
    source: '3',
    container: 'fieldgroupid37'
});
var instcrew4 = form.addField({
    id: 'custpage_instcrew2',
    type: serverWidget.FieldType.TEXT,
    label: 'Input Crew Size',
    container: 'fieldgroupid37'
});


instcrew1.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

instcrew1.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

instcrew2.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

instcrew2.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

instcrew3.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

instcrew3.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
instcrew4.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

instcrew4.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

///

var fieldgroup38 = form.addFieldGroup({
    id: 'fieldgroupid38',
    label: 'hIDDEN'
});
fieldgroup38.isBorderHidden = true;
form
    .addField({
        id: 'custpage_prod_emp_hours',
        type: serverWidget.FieldType.TEXT,
        label: "Total number of Man Hours worked this season (production employees).",
        container: 'fieldgroupid38'
    });

    ///
    var fieldgroup39 = form.addFieldGroup({
        id: 'fieldgroupid39',
        label: 'hIDDEN'
    });
    fieldgroup39.isBorderHidden = true;
    form
        .addField({
            id: 'custpage_rev_man_hours',
            type: serverWidget.FieldType.TEXT,
            label: "Revenue per Man Hour: ",
            container: 'fieldgroupid39'
        });

        var fieldgroup40 = form.addFieldGroup({
            id: 'fieldgroupid40',
            label: '<font size="4">Average Daily Production (ADP):</font><br\><br\><b>In this section, we will compute your ADP. To do this we need you to input the number of days you worked for NEW installs and for RENEWAL installs. For each, also input the number of crews you assigned to do the work. <br\><br\>Your total revenue for each type of work will "autofill" from the numbers you input above. We will use those numbers to create your ADP for both New and RENEWAL work.<br\><br\>The actual calculation is as follows: ((Total revenue) / # of production days) / (# of crews).For example: $125,000 / 30 (days) / 2 (crews) = $2083.33 per crew, per day.'
        });

        var adp = form.addField({
            id: 'custpage_adp',
            type: serverWidget.FieldType.LABEL,
            label: '<b>NEW</b>',
            container: 'fieldgroupid40'
        });
        adp.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });

        var adp1 = form.addField({
            id: 'custpage_adp1',
            type: serverWidget.FieldType.INTEGER,
            label: "Revenue",
            container: 'fieldgroupid40'
        });
        adp1.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });
        var adp2 = form.addField({
            id: 'custpage_adp2',
            type: serverWidget.FieldType.INTEGER,
            label: "# of Production days",
            container: 'fieldgroupid40'
        });
        adp2.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });

        var adp3 = form.addField({
            id: 'custpage_adp3',
            type: serverWidget.FieldType.INTEGER,
            label: "# of Crews",
            container: 'fieldgroupid40'
        });
        adp3.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });

        var adpa= form.addFieldGroup({
            id: 'fieldgroupid41',
            label: 'hIDDEN'
        });
        adpa.isBorderHidden = true;

        var adpb = form.addField({
            id: 'custpage_adpb',
            type: serverWidget.FieldType.LABEL,
            label: '<b>RENEW</b>',
            container: 'fieldgroupid41'
        });
        adpb.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });
        var adp4 = form.addField({
            id: 'custpage_adp4',
            type: serverWidget.FieldType.INTEGER,
            label: "Revenue",
            container: 'fieldgroupid41'
        });
        adp4.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });
        var adp5 = form.addField({
            id: 'custpage_adp5',
            type: serverWidget.FieldType.INTEGER,
            label: "# of Production days",
            container: 'fieldgroupid41'
        });
        adp5.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });

        var adp6 = form.addField({
            id: 'custpage_adp6',
            type: serverWidget.FieldType.INTEGER,
            label: "# of Crews",
            container: 'fieldgroupid41'
        });
        adp6.updateBreakType({
            breakType: serverWidget.FieldBreakType.STARTCOL
        });

        var fieldgroup42 = form.addFieldGroup({
            id: 'fieldgroupid42',
            label: 'hIDDEN'
        });
        fieldgroup42.isBorderHidden = true;
        form
            .addField({
                id: 'custpage_prod_adp_newjobs',
                type: serverWidget.FieldType.TEXT,
                label: "ADP: NEW Jobs",
                container: 'fieldgroupid42'
            });
        
            ///
            var fieldgroup43 = form.addFieldGroup({
                id: 'fieldgroupid43',
                label: 'hIDDEN'
            });
            fieldgroup43.isBorderHidden = true;
            form
                .addField({
                    id: 'custpage_adp_renew_jobs',
                    type: serverWidget.FieldType.TEXT,
                    label: "ADP: RENEW Jobs ",
                    container: 'fieldgroupid43'
                });

                ////


                var fieldgroup44 = form.addFieldGroup({
                    id: 'fieldgroupid44',
                    label: '<font size="4">Pricing Information:</font><br\><br\>CORE ITEMS AMP MODIFIER PERCENTAGE - what did you modify AMP by this season for your CORE items?'
                });

             /*   //fieldgroup15a.isBorderHidden = true;
                form.addField({
                    id: 'custpage_amp_mod',
                    type: serverWidget.FieldType.TEXT,
                    label: '  ',
                    container: 'fieldgroupid44'
                }).updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.NORMAL
                }).updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                }).updateDisplayType({
                    displayType: serverWidget.FieldDisplayType.INLINE
                }).defaultValue = "";
          
          
*/
                 var amp_mod1 = form.addField({
                      id: 'custpage_amp_mod1',
                      type: serverWidget.FieldType.SELECT,
                      label: 'AMP Modifier %',
                      source: 'customlist_mark_price_amp',
                      container: 'fieldgroupid44'
                  });
         /* var amp_mod2 = form.addField({
                      id: 'custpage_amp_mod1',
                      type: serverWidget.FieldType.RADIO,
                      label: '-9 to -1%',
                      source: '-9 to -1%',
                      container: 'fieldgroupid44'
                  });
                var amp_mod3 = form.addField({
                    id: 'custpage_amp_mod1',
                    type: serverWidget.FieldType.RADIO,
                    label: '0%',
                  source: '0%',
                    container: 'fieldgroupid44'
                });
                var amp_mod4 = form.addField({
                    id: 'custpage_amp_mod1',
                    type: serverWidget.FieldType.RADIO,
                    label: '1 - 5%',
                  source: '1 - 5%',
                    container: 'fieldgroupid44'
                });
                var amp_mod5 = form.addField({
                    id: 'custpage_amp_mod1',
                    type: serverWidget.FieldType.RADIO,
                    label: '6 -10%',
                  source: '6 -10%',
                    container: 'fieldgroupid44'
                });
                var amp_mod6 = form.addField({
                    id: 'custpage_amp_mod1',
                    type: serverWidget.FieldType.RADIO,
                    label: '11 - 15%',
                  source: '11 - 15%',
                    container: 'fieldgroupid44'
                });
                var amp_mod7 = form.addField({
                    id: 'custpage_amp_mod1',
                    type: serverWidget.FieldType.RADIO,
                    label: '16 - 20%',
                  source: '16 - 20%',
                    container: 'fieldgroupid44'
                });
                var amp_mod8 = form.addField({
                    id: 'custpage_amp_mod1',
                    type: serverWidget.FieldType.RADIO,
                    label: '21-25%',
                  source: '21-25%',
                    container: 'fieldgroupid44'
                });
                var amp_mod9 = form.addField({
                    id: 'custpage_amp_mod1',
                    type: serverWidget.FieldType.RADIO,
                    label: '26% +',
                  source: '26% +',
                    container: 'fieldgroupid44'
                });
                var amp_mod10 = form.addField({
                    id: 'custpage_amp_mod1',
                    type: serverWidget.FieldType.RADIO,
                    label: 'Custom Pricing',
                  source: 'Custom Pricing',
                    container: 'fieldgroupid44'
                });
                var amp_mod11 = form.addField({
                    id: 'custpage_amp_mod11',
                    type: serverWidget.FieldType.TEXT,
                    label: 'Other',
                    container: 'fieldgroupid44'
                });
    
                amp_mod1.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod1.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
    
                amp_mod2.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod2.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
                amp_mod3.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod3.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
                amp_mod4.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod4.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
                amp_mod5.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod5.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
                amp_mod6.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod6.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
                amp_mod7.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod7.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
                amp_mod8.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod8.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
                amp_mod9.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod9.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
                amp_mod10.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod10.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });
                amp_mod11.updateLayoutType({
                    layoutType: serverWidget.FieldLayoutType.OUTSIDE
                });
    
                amp_mod11.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTROW
                });

*/
                ///

                var fieldgroup45 = form.addFieldGroup({
                    id: 'fieldgroupid45',
                    label: '<font size="4">CORE ITEM PRICING:</font>'
                });
        
                var led = form.addField({
                    id: 'custpage_led',
                    type: serverWidget.FieldType.LABEL,
                    label: '<b>Fascia (C9 LED-SpeedClip)</b>',
                    container: 'fieldgroupid45'
                });
                led.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
        
                var led1 = form.addField({
                    id: 'custpage_led1',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 1",
                    container: 'fieldgroupid45'
                });
                led1.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                var led2 = form.addField({
                    id: 'custpage_led2',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 2",
                    container: 'fieldgroupid45'
                });
                led2.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                ///
                var fieldgroup45a = form.addFieldGroup({
                    id: 'fieldgroupid45a',
                    label: ' '
                });
                fieldgroup45a.isBorderHidden = true;
        
                var win = form.addField({
                    id: 'custpage_win',
                    type: serverWidget.FieldType.LABEL,
                    label: '<b>Windows</b>',
                    container: 'fieldgroupid45a'
                });
                led.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
        
                var win1 = form.addField({
                    id: 'custpage_win1',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 1",
                    container: 'fieldgroupid45a'
                });
                win1.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                var win2 = form.addField({
                    id: 'custpage_win2',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 2",
                    container: 'fieldgroupid45a'
                });
                win2.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                ///
                var fieldgroup45b = form.addFieldGroup({
                    id: 'fieldgroupid45b',
                    label: ' '
                });
                fieldgroup45b.isBorderHidden = true;
        
                var shrub = form.addField({
                    id: 'custpage_shrub',
                    type: serverWidget.FieldType.LABEL,
                    label: '<b>Shrub</b>',
                    container: 'fieldgroupid45b'
                });
                shrub.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
        
                var shrub1 = form.addField({
                    id: 'custpage_shrub1',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 1",
                    container: 'fieldgroupid45b'
                });
                shrub1.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                var shrub2 = form.addField({
                    id: 'custpage_shrub2',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 2",
                    container: 'fieldgroupid45b'
                });
                shrub2.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                ///
                var fieldgroup45c = form.addFieldGroup({
                    id: 'fieldgroupid45c',
                    label: ' '
                });
                fieldgroup45c.isBorderHidden = true;
        
                var treecan = form.addField({
                    id: 'custpage_treecan',
                    type: serverWidget.FieldType.LABEL,
                    label: '<b>Tree - Canopy</b>',
                    container: 'fieldgroupid45c'
                });
                treecan.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
        
                var treecan1 = form.addField({
                    id: 'custpage_treecan1',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 1",
                    container: 'fieldgroupid45c'
                });
                treecan1.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                var treecan2 = form.addField({
                    id: 'custpage_treecan2',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 2",
                    container: 'fieldgroupid45c'
                });
                treecan2.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                ///
                var fieldgroup45d = form.addFieldGroup({
                    id: 'fieldgroupid45d',
                    label: ' '
                });
                fieldgroup45d.isBorderHidden = true;
        
                var treebran = form.addField({
                    id: 'custpage_treebran',
                    type: serverWidget.FieldType.LABEL,
                    label: '<b>Tree - Canopy</b>',
                    container: 'fieldgroupid45d'
                });
                treecan.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
        
                var treebran1 = form.addField({
                    id: 'custpage_treebran1',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 1",
                    container: 'fieldgroupid45d'
                });
                treebran1.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                var treebran2 = form.addField({
                    id: 'custpage_treebran2',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 2",
                    container: 'fieldgroupid45d'
                });
                treebran2.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                ///
                var fieldgroup45e = form.addFieldGroup({
                    id: 'fieldgroupid45e',
                    label: ' '
                });
                fieldgroup45e.isBorderHidden = true;
        
                var treestk = form.addField({
                    id: 'custpage_treestk',
                    type: serverWidget.FieldType.LABEL,
                    label: '<b>Tree - Stake</b>',
                    container: 'fieldgroupid45e'
                });
                treestk.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
        
                var treestk1 = form.addField({
                    id: 'custpage_treestk1',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 1",
                    container: 'fieldgroupid45e'
                });
                treestk1.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                var treestk2 = form.addField({
                    id: 'custpage_treestk2',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 2",
                    container: 'fieldgroupid45e'
                });
                treestk2.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                ///
                var fieldgroup45f = form.addFieldGroup({
                    id: 'fieldgroupid45f',
                    label: ' '
                });
                fieldgroup45f.isBorderHidden = true;
        
                var gar = form.addField({
                    id: 'custpage_gar',
                    type: serverWidget.FieldType.LABEL,
                    label: '<b>Garland (14")</b>',
                    container: 'fieldgroupid45f'
                });
                gar.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
        
                var gar1 = form.addField({
                    id: 'custpage_gar1',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 1",
                    container: 'fieldgroupid45f'
                });
                gar1.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                var gar2 = form.addField({
                    id: 'custpage_gar2',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 2",
                    container: 'fieldgroupid45f'
                });
                gar2.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                ///
                var fieldgroup45g = form.addFieldGroup({
                    id: 'fieldgroupid45g',
                    label: ' '
                });
                fieldgroup45g.isBorderHidden = true;
        
                var wre36 = form.addField({
                    id: 'custpage_wre36',
                    type: serverWidget.FieldType.LABEL,
                    label: '<b>Wreath pre-lit (36")	</b>',
                    container: 'fieldgroupid45g'
                });
                wre36.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
        
                var wre361 = form.addField({
                    id: 'custpage_wre361',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 1",
                    container: 'fieldgroupid45g'
                });
                wre361.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                var wre362 = form.addField({
                    id: 'custpage_wre362',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 2",
                    container: 'fieldgroupid45g'
                });
                wre362.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                ///
                var fieldgroup45h = form.addFieldGroup({
                    id: 'fieldgroupid45h',
                    label: ' '
                });
                fieldgroup45h.isBorderHidden = true;
        
                var wre48 = form.addField({
                    id: 'custpage_wre48',
                    type: serverWidget.FieldType.LABEL,
                    label: '<b>Wreath pre-lit (48")</b>',
                    container: 'fieldgroupid45h'
                });
                wre48.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
        
                var wre481 = form.addField({
                    id: 'custpage_wre481',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 1",
                    container: 'fieldgroupid45h'
                });
                wre481.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });
                var wre482 = form.addField({
                    id: 'custpage_wre482',
                    type: serverWidget.FieldType.TEXT,
                    label: "Level 2",
                    container: 'fieldgroupid45h'
                });
          
        /*  
         * 
         * SPECIALITY PRIICNG
         form.addField({  
                id: 'custpage_afterhours',
                type: serverWidget.FieldType.TEXT,
                label: 'Do you have an "after hours" answering service? ',
                container: 'fieldgroupid15'
            }).updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.NORMAL
            }).updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            }).updateDisplayType({
                displayType: serverWidget.FieldDisplayType.INLINE
            }).defaultValue = "";

            var afterhr1 = form.addField({
                id: 'custpage_afterhours1',
                type: serverWidget.FieldType.RADIO,
                label: 'Yes',
                source: 'p1',
                container: 'fieldgroupid15'
            });
            var afterhr2 = form.addField({
                id: 'custpage_afterhours1',
                type: serverWidget.FieldType.RADIO,
                label: 'No',
                source: 'p2',
                container: 'fieldgroupid15'
            });

            afterhr1.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            afterhr1.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });

            afterhr2.updateLayoutType({
                layoutType: serverWidget.FieldLayoutType.OUTSIDE
            });

            afterhr2.updateBreakType({
                breakType: serverWidget.FieldBreakType.STARTROW
            });*/
                wre482.updateBreakType({
                    breakType: serverWidget.FieldBreakType.STARTCOL
                });

                var fieldgroup46 = form.addFieldGroup({
                    id: 'fieldgroupid46',
                    label: '<font size="4">Cost Information:</font>'
                });
                var fieldgroup46 = form.addFieldGroup({
                    id: 'fieldgroupid46',
                    label: 'hIDDEN'
                });
                fieldgroup46.isBorderHidden = true;
               var tot_lbr_cost = form
                    .addField({
                        id: 'custpage_tot_lbr_cost',
                        type: serverWidget.FieldType.TEXT,
                        label: "What was your total LABOR costs for this season?",
                        container: 'fieldgroupid46'
                    });
                    tot_lbr_cost.updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.OUTSIDE
                    });
                    tot_lbr_cost.updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    });

                    var prod_costs = form
                    .addField({
                        id: 'custpage_prod_costs',
                        type: serverWidget.FieldType.TEXT,
                        label: "What were your product costs related to NEW SALES this season? ",
                        container: 'fieldgroupid46'
                    });
                    prod_costs.updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.OUTSIDE
                    });
                    prod_costs.updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    });

                    var totsales = form
                    .addField({
                        id: 'custpage_totsales',
                        type: serverWidget.FieldType.TEXT,
                        label: "What were your total SALES costs this season?  ",
                        container: 'fieldgroupid46'
                    });
                    totsales.updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.OUTSIDE
                    });
                    totsales.updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    });

                    var equ_rental = form
                    .addField({
                        id: 'custpage_equ_rental',
                        type: serverWidget.FieldType.TEXT,
                        label: "What, if any, were your total costs for special equipment rental this season? ",
                        container: 'fieldgroupid46'
                    });
                    equ_rental.updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.OUTSIDE
                    });
                    equ_rental.updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    });

                    var add_costs = form
                    .addField({
                        id: 'custpage_add_costs',
                        type: serverWidget.FieldType.TEXT,
                        label: "What, if any, were your additional costs directly related to your Christmas business this season?  ",
                        container: 'fieldgroupid46'
                    });
                    add_costs.updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.OUTSIDE
                    });
                    add_costs.updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    });

                    ////

                    var fieldgroup47 = form.addFieldGroup({
                        id: 'fieldgroupid47',
                        label: '<font size="4">General Information:</font>  <br\><br\>Did you use the SalesApp this season?'
                    });
    
                    //fieldgroup15a.isBorderHidden = true;
                 /*   form.addField({
                        id: 'custpage_salesapp',
                        type: serverWidget.FieldType.TEXT,
                        label: '  ',
                        container: 'fieldgroupid47'
                    }).updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.NORMAL
                    }).updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    }).updateDisplayType({
                        displayType: serverWidget.FieldDisplayType.INLINE
                    }).defaultValue = "";
        */
                    var salesapp1 = form.addField({
                        id: 'custpage_salesapp1',
                        type: serverWidget.FieldType.SELECT,
                        label: ' ',
                        source: 'customlist1438',
                        container: 'fieldgroupid47'
                    });
                    /*var salesapp2 = form.addField({
                        id: 'custpage_salesapp1',
                        type: serverWidget.FieldType.RADIO,
                        label: 'No',
                        source: 'p2',
                        container: 'fieldgroupid47'
                    });
          salesapp1.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapp1.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          salesapp2.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapp2.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
*/
///

var fieldgroup47a = form.addFieldGroup({
                        id: 'fieldgroupid47a',
                        label: '<font size="4">If YES, please rate your satisfaction with the SalesApp this season. One being the worst to Ten being the best'
                    });
    
                    //fieldgroup15a.isBorderHidden = true;
                    form.addField({
                        id: 'custpage_salesapprate',
                        type: serverWidget.FieldType.TEXT,
                        label: '  ',
                        container: 'fieldgroupid47a'
                    }).updateLayoutType({
                        layoutType: serverWidget.FieldLayoutType.NORMAL
                    }).updateBreakType({
                        breakType: serverWidget.FieldBreakType.STARTROW
                    }).updateDisplayType({
                        displayType: serverWidget.FieldDisplayType.INLINE
                    }).defaultValue = "";
        
                    var salesapprate1 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '1',
                        source: '1',
                        container: 'fieldgroupid47a'
                    });
                     var salesapprate2 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '2',
                        source: '2',
                        container: 'fieldgroupid47a'
                    });
           var salesapprate3 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '3',
                        source: '3',
                        container: 'fieldgroupid47a'
                    });
           var salesapprate4 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '4',
                        source: '4',
                        container: 'fieldgroupid47a'
                    });
           var salesapprate5 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '5',
                        source: '5',
                        container: 'fieldgroupid47a'
                    });
           var salesapprate6 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '6',
                        source: '6',
                        container: 'fieldgroupid47a'
                    });
           var salesapprate7 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '7',
                        source: '7',
                        container: 'fieldgroupid47a'
                    });
           var salesapprate8 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '8',
                        source: '8',
                        container: 'fieldgroupid47a'
                    });
           var salesapprate9 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '9',
                        source: '9',
                        container: 'fieldgroupid47a'
                    });
           var salesapprate10 = form.addField({
                        id: 'custpage_salesapprate1',
                        type: serverWidget.FieldType.RADIO,
                        label: '10',
                        source: '10',
                        container: 'fieldgroupid47a'
                    });
          salesapprate1.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate1.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          salesapprate2.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate2.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          
           salesapprate3.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate3.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          
           salesapprate4.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate4.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          
           salesapprate5.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate5.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          
           salesapprate6.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate6.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          
           salesapprate7.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate7.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          
           salesapprate8.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate8.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          
           salesapprate9.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate9.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
          
           salesapprate10.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

salesapprate10.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
////


var fieldgroup48 = form.addFieldGroup({
    id: 'fieldgroupid48',
    label: 'Did you see an increase in the number of competitors in your market this season?'
});

//fieldgroup15a.isBorderHidden = true;
form.addField({
    id: 'custpage_compinc',
    type: serverWidget.FieldType.TEXT,
    label: '  ',
    container: 'fieldgroupid48'
}).updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.NORMAL
}).updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
}).updateDisplayType({
    displayType: serverWidget.FieldDisplayType.INLINE
}).defaultValue = "";

var compinc1 = form.addField({
    id: 'custpage_compinc1',
    type: serverWidget.FieldType.RADIO,
    label: 'Yes',
    source: '1-4',
    container: 'fieldgroupid48'
});
var compinc2 = form.addField({
    id: 'custpage_compinc1',
    type: serverWidget.FieldType.RADIO,
    label: 'No',
    source: 'p2',
    container: 'fieldgroupid48'
});
compinc1.updateLayoutType({
layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

compinc1.updateBreakType({
breakType: serverWidget.FieldBreakType.STARTROW
});
compinc2.updateLayoutType({
layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

compinc2.updateBreakType({
breakType: serverWidget.FieldBreakType.STARTROW
});

/////


var fieldgroup49 = form.addFieldGroup({
    id: 'fieldgroupid49',
    label: 'Please identify any areas where CD corporate can assist you in improving your business (please check all that apply).'
});

//fieldgroup15a.isBorderHidden = true;
/*form.addField({
    id: 'custpage_imp_bus',
    type: serverWidget.FieldType.TEXT,
    label: '  ',
    container: 'fieldgroupid49'
}).updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.NORMAL
}).updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
}).updateDisplayType({
    displayType: serverWidget.FieldDisplayType.INLINE
}).defaultValue = "";
*/
var imp_bus1 = form.addField({
    id: 'custpage_imp_bus1',
    type: serverWidget.FieldType.SELECT,
    label:'Corporate Assist',
    source: 'customlist_gi_cdassist',
    container: 'fieldgroupid49'
});
/*var imp_bus2 = form.addField({
    id: 'custpage_imp_bus2',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Marketing',
    container: 'fieldgroupid49'
});
var imp_bus3 = form.addField({
    id: 'custpage_imp_bus3',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Install / Takedown',
    container: 'fieldgroupid49'
});
var imp_bus4 = form.addField({
    id: 'custpage_imp_bus4',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Prep',
    container: 'fieldgroupid49'
});
var imp_bus5 = form.addField({
    id: 'custpage_imp_bus5',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Administration',
    container: 'fieldgroupid49'
});
var imp_bus6 = form.addField({
    id: 'custpage_imp_bus6',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Technology - Software & Tools (SalesApp/LightRight/Pricing Tools, etc)',
    container: 'fieldgroupid49'
});
var imp_bus7 = form.addField({
    id: 'custpage_imp_bus7',
    type: serverWidget.FieldType.CHECKBOX,
    label: '1Commercial client development',
    container: 'fieldgroupid49'
});
var imp_bus8 = form.addField({
    id: 'custpage_imp_bus8',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Specialty items',
    container: 'fieldgroupid49'
});
var imp_bus9 = form.addField({
    id: 'custpage_imp_bus9',
    type: serverWidget.FieldType.TEXT,
    label: 'Others',
    container: 'fieldgroupid49'
});

imp_bus1.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

imp_bus1.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

imp_bus2.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

imp_bus2.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
imp_bus3.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

imp_bus3.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
imp_bus4.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

imp_bus4.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
imp_bus5.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

imp_bus5.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
imp_bus6.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

imp_bus6.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
imp_bus7.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

imp_bus7.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
imp_bus8.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

imp_bus8.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
imp_bus9.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

imp_bus9.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
*/
///

var fieldgroup50 = form.addFieldGroup({
    id: 'fieldgroupid50',
    label: 'SERVICE COMMITMENT CHECKLIST (Please check only those items you do for all clients): '
});

//fieldgroup15a.isBorderHidden = true;
/*form.addField({
    id: 'custpage_service',
    type: serverWidget.FieldType.TEXT,
    label: '  ',
    container: 'fieldgroupid50'
}).updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.NORMAL
}).updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
}).updateDisplayType({
    displayType: serverWidget.FieldDisplayType.INLINE
}).defaultValue = "";
*/
var service1 = form.addField({
    id: 'custpage_service1',
    type: serverWidget.FieldType.SELECT,
    label: 'Personally contacting reinstall clients',
    source:'customlist_gi_scc',
    container: 'fieldgroupid50'
});
/*
var service2 = form.addField({
    id: 'custpage_service2',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Follow up call after installation',
    container: 'fieldgroupid50'
});
var service3 = form.addField({
    id: 'custpage_service3',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Complimentary Service Calls',
    container: 'fieldgroupid50'
});
var service4 = form.addField({
    id: 'custpage_service4',
    type: serverWidget.FieldType.CHECKBOX,
    label: '1st pro-active service call AND leaving service door hanger',
    container: 'fieldgroupid50'
});
var service5 = form.addField({
    id: 'custpage_service5',
    type: serverWidget.FieldType.CHECKBOX,
    label: '2nd pro-active service call AND leaving service door hanger',
    container: 'fieldgroupid50'
});
var service6 = form.addField({
    id: 'custpage_service6',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Offer Client Loyalty Incentive',
    container: 'fieldgroupid50'
});
var service7 = form.addField({
    id: 'custpage_service7',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Follow-up with client after takedown',
    container: 'fieldgroupid50'
});
var service8 = form.addField({
    id: 'custpage_service8',
    type: serverWidget.FieldType.CHECKBOX,
    label: 'Spring cleanup onsite visit',
    container: 'fieldgroupid50'
});

service1.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

service1.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});

service2.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

service2.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
service3.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

service3.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
service4.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

service4.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
service5.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

service5.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
service6.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

service6.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
service7.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

service7.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
service8.updateLayoutType({
    layoutType: serverWidget.FieldLayoutType.OUTSIDE
});

service8.updateBreakType({
    breakType: serverWidget.FieldBreakType.STARTROW
});
*/
var fieldgroup51 = form.addFieldGroup({
    id: 'fieldgroupid51',
    label: '<font size="4">Congratulations you have completed the SURVEY portion - the hard part is over!</font>  <br\><br\>You are about 80% done with Reporting for this season.<br\><br\><br\><br\>From here there are just 2 more steps -<br\><br\></br>1. <b>Payment Information</b> - this next step is where you will tell us exactly what payment method, how much, etc. so we can apply the payment exactly per your wishes.<br\><br\>    2. <b></b>Invoice generation</b> - this step takes your information and calculates your Year End Royalty and MDF payment due. This calculation takes into consideration payments you have made all year and any you made before the end of the year.<br\><br\><br\><br\><font size=4>Payment information</font><br\><br\></br>We cannot store any financial information on this Form. To tell us how you would like us to apply payment please chose from the following 3 choices:<br\><br\>Use a credit card on file - we will apply payment using the credit card that you have with us.<br\><br\>Use an ACH on file - like the credit card, we will process your payment using your ACH on file with us.<br\><br\>OTHER - for any other payment scenarios - you MUST call Barbara Anderson in Accounting if you use this option. (806) 319-7069<br\><br\> <br\>  <b> DO NOT PUT ANY BANK or CREDIT CARD INFORMATION into this input box!</b> <br\><br\> <br\> PAYMENT - please process my payment using the following method. If you want to use a combination or have any specific ways to apply payment chose "OTHER" and tell us in the Input Box: '
});
    //fieldgroup20.isBorderHidden = true;
   /* form.addField({
        id: 'custpage_payment',
        type: serverWidget.FieldType.TEXT,
        label: '  ',
        container: 'fieldgroupid51'
    }).updateLayoutType({
        layoutType: serverWidget.FieldLayoutType.NORMAL
    }).updateBreakType({
        breakType: serverWidget.FieldBreakType.STARTROW
    }).updateDisplayType({
        displayType: serverWidget.FieldDisplayType.INLINE
    }).defaultValue = "";
    */
    var payment1 = form.addField({
        id: 'custpage_payment1',
        type: serverWidget.FieldType.SELECT,
        label: 'Payment Type',
        source: 'customlist_paymenttypes',
        container: 'fieldgroupid51'
    });
    /*var payment2 = form.addField({
        id: 'custpage_payment1',
        type: serverWidget.FieldType.SELECT,
        label: 'Mastercard on File',
        source: 'custrecord_payment',
        container: 'fieldgroupid51'
    });
    var payment3 = form.addField({
        id: 'custpage_payment1',
        type: serverWidget.FieldType.RADIO,
        label: 'Discover on File',
        source: 'p3',
        container: 'fieldgroupid51'
    });
    var payment4 = form.addField({
        id: 'custpage_payment1',
        type: serverWidget.FieldType.RADIO,
        label: 'AMEX on File',
        source: 'p4',
        container: 'fieldgroupid51'
    });
    var payment5 = form.addField({
        id: 'custpage_payment1',
        type: serverWidget.FieldType.RADIO,
        label: 'ACH on File',
        source: 'p5',
        container: 'fieldgroupid51'
    });
    var payment6 = form.addField({
        id: 'custpage_payment6',
        type: serverWidget.FieldType.TEXT,
        label: 'Other',
        container: 'fieldgroupid51'
    });
    
    
    payment1.updateLayoutType({
        layoutType: serverWidget.FieldLayoutType.OUTSIDE
    });
    
    payment1.updateBreakType({
        breakType: serverWidget.FieldBreakType.STARTROW
    });
    
    payment2.updateLayoutType({
        layoutType: serverWidget.FieldLayoutType.OUTSIDE
    });
    
    payment2.updateBreakType({
        breakType: serverWidget.FieldBreakType.STARTROW
    });
    
    payment3.updateLayoutType({
        layoutType: serverWidget.FieldLayoutType.OUTSIDE
    });
    
    payment3.updateBreakType({
        breakType: serverWidget.FieldBreakType.STARTROW
    });
    payment4.updateLayoutType({
        layoutType: serverWidget.FieldLayoutType.OUTSIDE
    });
    
    payment4.updateBreakType({
        breakType: serverWidget.FieldBreakType.STARTROW
    });
    payment5.updateLayoutType({
        layoutType: serverWidget.FieldLayoutType.OUTSIDE
    });
    
    payment5.updateBreakType({
        breakType: serverWidget.FieldBreakType.STARTROW
    });
    payment6.updateLayoutType({
        layoutType: serverWidget.FieldLayoutType.OUTSIDE
    });
    
    payment6.updateBreakType({
        breakType: serverWidget.FieldBreakType.STARTROW
    });
*/
    var fieldgroup52 = form.addFieldGroup({
        id: 'fieldgroupid52',
        label: 'Now that your payment information is set, we will calculate your ROYALTY and MDF due for year-end. Once you hit submit below you will see a new page with your sales information. <BR\>This is the same information that you input above. This information is extremely important as we use it to calculate royalties and MDF for the year. <br\>If it is CORRECT, hit submit. If not, hit your browsers BACK button to return to this Survey - and fix the Sales Information table above. Once its all good and you hit submit you will then see your "Year-End Invoice". <br\>You can print a version for your records (of course, you will get a receipt via email also). We will be alerted to use the payment information settings above to process the payment.'
    });

    form.addField({
        id: 'custpage_pay',
        type: serverWidget.FieldType.TEXT,
        label: '  ',
        container: 'fieldgroupid52'
    }).updateLayoutType({
        layoutType: serverWidget.FieldLayoutType.NORMAL
    }).updateBreakType({
        breakType: serverWidget.FieldBreakType.STARTROW
    }).updateDisplayType({
        displayType: serverWidget.FieldDisplayType.INLINE
    }).defaultValue = "";
          
          form.addSubmitButton({
    label : 'Submit'
});


           return form;
        }

        return {
            onRequest: onRequest
        };

    });