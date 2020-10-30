function service(request,response){

    var data = request.getParameter("data");


    if (data){
        data = JSON.parse(data);
        var file = nlapiCreateFile(data.order + "_" + new Date() + ".txt","PLAINTEXT",JSON.stringify(data));
        file.setEncoding('UTF-8');
        file.setFolder(298714);
        nlapiSubmitFile(file);
    }

}