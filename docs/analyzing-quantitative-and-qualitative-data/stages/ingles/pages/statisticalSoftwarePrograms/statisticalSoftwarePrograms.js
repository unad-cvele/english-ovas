class inglesClass_statisticalSoftwarePrograms extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
      return `
      <div class="header-h2"><h2>Statistical software programs</h2></div>
      
      <div class="text-general">
          <p>Statistical software are tools that are used for statistical analysis of data <strong>collection, organization, analysis, interpretation and presentation.</strong> There are many of these tools and not all of them are the same. These are some statistical programs that facilitate the preparation, analysis and visualization of data in the analysis process.</p>
          <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">SPSS</button>
                <div class="text-acordeon">
                    <p>SPSS is a tool designed to support data analysis and management in many areas of knowledge, whether you are preparing to perform descriptive statistics, linear regression, factor analysis or cluster analysis, etc.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Excel</button>
                <div class="text-acordeon">
                    <p>Excel is a tool that stands out for its integrated pivot tables. With this software, you can sort or filter your data in any way you want. For example, you can sort your data from the highest to the lowest value. You can also filter your data based on various criteria, among others, and create charts and tables easily and quickly to help you analyze and visualize your data.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Python</button>
                <div class="text-acordeon">
                    <p>Python helps you perform many advanced procedures and supports the development of sophisticated models. It can be used to import and export data sets and to handle simple linear regression, multiple linear regression and polynomial regression. The tool is useful for cleaning or preparing your data, including data formatting and clustering. It also includes data normalization, identification and treatment of missing values. Data set clustering, correlation and descriptive statistics are other critical functions you can perform with Python.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">SAS</button>
                <div class="text-acordeon">
                    <p>SAS is a data analysis tool that supports multivariate analysis, advanced analytics, business intelligence, predictive analytics and data management. This software harnesses the power of artificial intelligence for reliable and realistic data analysis.</p>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">STATA</button>
                <div class="text-acordeon">
                    <p>STATA has a wealth of statistical features to analyze data professionally. It offers dynamic document creation that supports the production of reproducible research, publication-quality graphics can be designed to accompany content, and it is cross-platform compatible.</p>
                </div>
            </div>
          </div>
          
          
      </div>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}        
}

//let stages_ingles_statisticalSoftwarePrograms = new inglesClass_statisticalSoftwarePrograms('statisticalSoftwarePrograms');

stagePage.pageContainerSet('statisticalSoftwarePrograms',inglesClass_statisticalSoftwarePrograms);