class preImportJSClass{
    constructor(stageName,pageName = ''){
        this.stageName=stageName;
        this.pageName=pageName;
        this.localImportJS= new importCustomJS(configuration.globalURL,configuration.version,'JS - preImportJS'); 
    }
    load(files){
        let functions = [];
        let stageRoute = this.importJSRoute();
         for (let index = 0; index < files.length; index++) {
             functions.push(`${stageRoute}/${files[index]}`);
         }
         this.localImportJS.addFile(functions);
     }
     importJSRoute(){
        let stageRoute ='';
         if(this.pageName){
            stageRoute = `/stages/${this.stageName}/pages/${this.pageName}/includes`;
         }
         else{
            stageRoute = `/stages/${this.stageName}/includes`;
         }
        
        return stageRoute;
     }
}