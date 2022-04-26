class inglesClass_theConceptualFramework extends generalPage{
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
      <div class="header-h2"><h2>The Conceptual Framework</h2></div>
      <iframe class="iframe-video-principal" src="https://www.youtube.com/embed/C9mEAV9U3l4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stages_ingles.menu.back()">Back</button>
        <button class="btn-general btn-next" onclick="stages_ingles.menu.next()">Next</button>
        <button class="btn-general btn-show-content" onclick="stages_ingles.menu.showContentInText(this)">Show in text</button>
        <button class="btn-general btn-home" onclick="stages_ingles.menu.next('homePage');">Home</button>
      </div>
      <div class="text-show-content">
        <p>Display the titles below to read the transciption of the video.</p>
        <div class="text-general">
        <div class="main-container-acordeon">  
        <div class="container-acordeon">
            <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Definitions, purposes and features</button>
            <div class="text-acordeon">
                    <p>Representation of the connection of the theories, concepts, and assumptions set out for a research study in order to depict how the problem is being studied.</p>
                    <p>If synthesizes the findings if the literature review and the main theories of the theoretical framework and associates them with the research problem and the objetives.</p>
                    <p>This is done to better explain and understand the phenomenon being studied and to map out the actions required in the course of the study.</p>
                    <p>A conceptual framework is the general representation of the connection of the main theories, concepts, and assumptions set out for a research study in order to depict how the problem is being studied. In other words, it refers to the constructed framework or approach which indicates the set of scientific theories, empirical research and variables that are assumed and defined for a study.</p>
                    <p>The conceptual framework, synthesizes the findings of the literature review, and the main theories of the theoretical framework, and associates them with the research problem and the objectives.</p>
                    <p>This is done by the researcher for him to better explain, and understand the phenomenon being studied, and to map out the actions required in the course of the study. This means that the conceptual framework works as a map or path to conduct the research study.</p>
            </div>
        </div>
        <div class="container-acordeon">
            <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Functions of the conceptual framework</button>
            <div class="text-acordeon">
                <p>As the conceptual framework is the big picture of the research, it explains how all of the literature works together in the particular research; establishes the relationships that are set for the research variables, and determines how theories, concepts and beliefs are related to the research topic and problem. When existing theories are not applicable or sufficient for a research study, the conceptual framework is structured in an integrated way in order to look at the problem under study.</p>
                <p>Some functions of the conceptual framework are: </p>
                <ul>
                    <li>To explain the main topics to be studied and the presumed relationships among them.</li>
                    <li>To present the main theoretical, practical and conceptual factors that support the research.</li>
                    <li>To state what the researcher expects to find through the research (test hypothesis).</li>
                    <li>To inform the rest of the research design so as to refine the objectives, develop relevant research questions, and select appropriate methods.</li>
                    <li>To illustrate the designed theoretical approach graphically and textually to ease readers' understanding.</li>
                    <li>To explain how the research will be conducted.</li>
                    <li>To facilitate the collection of data and to guide in the analysis and interpretation of the data.</li>
                    <li>To help the researcher justify the study.</li>
                </ul>
            </div>
        </div>
        <div class="container-acordeon">
            <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Construction of a conceptual framework</button>
            <div class="text-acordeon">
                <p>The conceptual framework is always constructed by the researcher because it depends on the particular characteristics of the study, so it reflects the thinking of the entire research process and the researcher’s own understanding and management of the problem. There are no ready-made models for conceptual frameworks.
                </p>
                <h4>Research topics, problem and objectives.</h4>
                <p>Before constructing the conceptual framework, the research topics, problem and objectives ought to have already been clearly defined since the conceptual framework will provide the path to study the problem, test the hypothesis, study the variables, and achieve the research objectives.</p>
                <h4>Literature review and the theoretical framework</h4>
                <p>The literature review and the theoretical framework, ought to have already been conducted as well since the conceptual framework will use these findings, to incorporate them in the new framework that will explain the problem or phenomenon.</p>
                <h4>Theories and Concepts</h4>
                <p>Set the concepts to work with which can come from existing theory, from your experience, or from the people you are studying. This is done to represent the theory you already have about the phenomena you are studying, not primarily to invent a new theory.</p>
                <h4>Research variables</h4>
                <p>Identify the specific variables that are related to the research study you want to conduct. These variables can give your research a new scope and can also help you identify how these can be related to your research.</p>
                <h4>Connections in the diagram</h4>
                <p>As all this information is presented in a diagram (generally, a concept map), draw the connections among those concepts in the diagram by using arrows.</p>
                <h4>Description of the diagram</h4>
                <p>Write a narrative of what this concept map says about the phenomena you are studying. Try to capture in words the ideas that are embodied in the diagram.</p>
                <hr/>
                <p>Generally, a conceptual framework is represented graphically, by means of concept maps, but it is also suggested to write it in narrative form so as to description is complemented and accurately explained.</p>
            </div>
        </div>
        <div class="container-acordeon">
            <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Kinds of concept maps</button>
            <div class="text-acordeon">
                <p>There are different kinds of concept maps, with different purposes; these include the following:</p>
                <ul>
                    <li>An abstract framework mapping the relationship among concepts.</li>
                    <li>A flowchart-like account of events and how you think these are connected.</li>
                    <li>A causal network of variables or influences.</li>
                    <li>A treelike diagram of the meanings of words.</li>
                    <li>A Venn diagram, representing concepts as overlapping circles.</li>
                </ul>
            </div>
        </div>
        <div class="container-acordeon">
            <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Difference with a theoretical framework</button>
            <div class="text-acordeon">
                <p>Conceptual Framework and Theoretical Framework are commonly confused terms because of their rapport to the theories used in the study, but they are not definitively the same. The main differences are explained in this chart.</p>
                <table class="table-general">
                    <tr>
                        <td>Theoretical Framework</td>
                        <td>Conceptual Framework</td>
                    </tr>
                    <tr>
                        <td>It provides a general or broader set of ideas within which a specific study belongs.</td>
                        <td>It refers to specific or narrower ideas that the researcher utilizes in his/her own study.</td>
                    </tr>
                    <tr>
                        <td>It is based on existing ,theory,  theories, in the literature which has been tested and validated by other scholars.</td>
                        <td>It is based on the concepts which are the main variables in a study.</td>
                    </tr>
                    <tr>
                        <td>It is in the form of a model that pivots a study, with its exponents and the results of their studies</td>
                        <td>It is the researcher's own constructed model to explain the relationship between the main variables. It can also be an adaptation of a model in an existing theory which is adapted to suit the research purpose.</td>
                    </tr>
                    <tr>
                        <td>It is well developed, designed and scientifically accepted by scholars and the disciplines.</td>
                        <td>Its design is not scientifically accepted, but it's a proposal of the researcher's answer to the research problem s/he has defined.</td>
                    </tr>
                    <tr>
                        <td>It offers a focal point for approaching the unknown research in a specific field of inquiry.</td>
                        <td>It is the framework that shows logically how the research inquiry is to be undertaken.</td>
                    </tr>
                    <tr>
                        <td>It consists of theories that seem interrelated with their propositions deduced.</td>
                        <td>It consists of concepts interconnected to explain the relationships between them and how the researcher asserts to answer the research problem defined.</td>
                    </tr>
                    <tr>
                        <td>It is used to test theories, to predict and control the situations within the context of a research inquiry.</td>
                        <td>It is aimed at encouraging the development of a theory that would be useful to practitioners in the field.</td>
                    </tr>
                    <tr>
                        <td>It’s a broad and established set of rules, truths, or principles on which the study is founded.</td>
                        <td>It’s a specific exploration of an aspect of the theoretical framework. The CF is used to arrive at a hypothesis set from the phenomenon.</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="container-acordeon">
            <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">What is not a conceptual framework</button>
            <div class="text-acordeon">
                <p>A mere summary of the works analyzed in the literature and the theoretical principles chosen for the theoretical framework.</p>
                <ul>
                    <li>A graphical representation of the research design.</li>
                    <li>A list of concepts and definitions with no connection to the problem.</li>
                    <li>A graphic containing concepts and ideas with no connection between them.</li>
                    <li>Ideas and beliefs of the researcher with no connection to current and valid knowledge.</li>
                </ul>
            </div>
        </div>
        <div class="container-acordeon">
            <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Examples of Conceptual Frameworks</button>
            <div class="text-acordeon">
                <p>To better understand the structure of a conceptual framework, let’s have a look at some examples.
                    This example explains the connection between the theoretical and conceptual frameworks as well as to the hypothesis.
                    </p>
                <p>The first part “A researcher used theories about language in relation to various social factors” can be considered like the general theoretical principles that the researcher stated for the study.</p>
                <p>The second part “to understand that language is not an isolated object and that communication does not simply occur by means of sequences of sounds, but is a social practice within social life” corresponds to one part of the conceptual framework. We can state that from the theories consulted, the researcher could determine this statement.</p>
                <p>The third part “which led him to predict that it is the social environment that makes the language evolve.” Is the hypothesis that the researcher sets out from the theory consulted, but it’s also part of the conceptual framework since this is the explanation of the phenomenon studied and this might be a new theory that emerged from the study. In the whole conceptual framework, the researcher presents the main variables of the study and through the research process, he will test this hypothesis by means of the research design he may adopt.</p>
                <p>For the representation of this information in the concept map, the researcher has to present just the main words and sentences in labelled circles or boxes and set the connections and relationships using arrows or lines.</p>
            </div>
        </div>
        <div class="container-acordeon">
            <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Example</button>
            <div class="text-acordeon">
                <p>In this example, we can see in the graphic the conceptual framework developed by Kate Zinsser for the study of children’s development of socioemotional competence.</p>
                <p>The concept map shows in a summarized way the importance of emotional competence and its components; the social players involved in this process, especially the teacher’s role; the categories of the social emotional competence; the techniques used to assess these behaviors in children; the contexts where socialization occurs; and other theoretical, practical, and methodological components of the study.</p>
                <p>Follow the reference provided below the graphic to read and understand the written description of this conceptual framework.</p>
            </div>
        </div>
        <div class="container-acordeon">
            <button class="btn-acordeon" onclick="stages_ingles.acordeonList.show(this);">Conceptual framework developed by Noel Entwistle</button>
            <div class="text-acordeon">
                <p>This conceptual framework developed by Noel Entwistle, depicts the focal concept which is the quality of learning achieved, with the remaining concepts describing some of the variety of influences affecting the outcomes of learning. The top half includes concepts used to indicate some of the many variations shown by students in their attitudes and behavior, while the bottom half covers influences attributable to the teachers and the teaching-learning environment they design and implement</p>
                <p>Follow the reference provided below the graphic to discover the discussion of those concepts.</p>
            </div>
        </div>
      </div>
        </div>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}        
}

//let stages_ingles_theConceptualFramework = new inglesClass_theConceptualFramework('theConceptualFramework');

stagePage.pageContainerSet('theConceptualFramework',inglesClass_theConceptualFramework);