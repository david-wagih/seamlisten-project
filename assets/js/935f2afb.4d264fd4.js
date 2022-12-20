"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"quickstartSidebar":[{"type":"link","label":"Getting started with mining","href":"/stopes/docs/quickstart","docId":"quickstart"},{"type":"category","label":"stopes Modules","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"stopes Module Framework","href":"/stopes/docs/stopes/","docId":"stopes/index"},{"type":"link","label":"Module Overview","href":"/stopes/docs/stopes/module","docId":"stopes/module"},{"type":"link","label":"Composition (aka pipelining)","href":"/stopes/docs/stopes/pipelining","docId":"stopes/pipelining"},{"type":"link","label":"Configuration","href":"/stopes/docs/stopes/configuration","docId":"stopes/configuration"},{"type":"link","label":"Caching/Memoization","href":"/stopes/docs/stopes/cache","docId":"stopes/cache"},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Checkpointing (advanced)","href":"/stopes/docs/stopes/advanced/checkpointing","docId":"stopes/advanced/checkpointing"},{"type":"link","label":"Dynamic Initializing Modules (advanced)","href":"/stopes/docs/stopes/advanced/dynamic","docId":"stopes/advanced/dynamic"},{"type":"link","label":"Debugging","href":"/stopes/docs/stopes/advanced/debugging","docId":"stopes/advanced/debugging"}],"href":"/stopes/docs/category/advanced"}],"href":"/stopes/docs/category/stopes-modules"},{"type":"category","label":"Prebuilt Pipelines","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Global Mining Pipeline","href":"/stopes/docs/pipelines/global_mining","docId":"pipelines/global_mining"},{"type":"link","label":"NLLB Monolingual Pipeline","href":"/stopes/docs/pipelines/monolingual","docId":"pipelines/monolingual"},{"type":"link","label":"NLLB Distillation Pipeline","href":"/stopes/docs/pipelines/distillation","docId":"pipelines/distillation"}],"href":"/stopes/docs/category/prebuilt-pipelines"},{"type":"category","label":"Evaluation Toolkit","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"ALTI+","href":"/stopes/docs/eval/alti","docId":"eval/alti"},{"type":"link","label":"BLASER: A Text-Free Speech-to-Speech Translation Evaluation Metric","href":"/stopes/docs/eval/blaser","docId":"eval/blaser"}],"href":"/stopes/docs/category/evaluation-toolkit"}]},"docs":{"eval/alti":{"id":"eval/alti","title":"ALTI+","description":"ALTI+ is a tool for inspecting token contributions in a transformer encoder-decoder model.","sidebar":"quickstartSidebar"},"eval/blaser":{"id":"eval/blaser","title":"BLASER: A Text-Free Speech-to-Speech Translation Evaluation Metric","description":"BLASER leverages a multilingual multimodal encoder to directly encode the speech segments for source input, translation output and reference into a shared embedding space and computes a score of the translation quality that can be used as a proxy to human evaluation.","sidebar":"quickstartSidebar"},"pipelines/distillation":{"id":"pipelines/distillation","title":"NLLB Distillation Pipeline","description":"Welcome to stopes, and thanks for checking out our sequence-level knowledge distillation pipeline. This is a quick start guide which walks through how to run the pipeline yourself and what the expected outputs will be from each step. The logic of the pipeline is at a high level as follows:","sidebar":"quickstartSidebar"},"pipelines/global_mining":{"id":"pipelines/global_mining","title":"Global Mining Pipeline","description":"You can launch the mining for a pair of languages with the following command:","sidebar":"quickstartSidebar"},"pipelines/monolingual":{"id":"pipelines/monolingual","title":"NLLB Monolingual Pipeline","description":"This is the monolingual \\"cleaning\\" pipeline, it does a few things:","sidebar":"quickstartSidebar"},"quickstart":{"id":"quickstart","title":"Getting started with mining","description":"Welcome to stopes, this is a quickstart guide to discover how to run automated pipelines with stopes. In this example, you\'ll be running","sidebar":"quickstartSidebar"},"stopes/advanced/checkpointing":{"id":"stopes/advanced/checkpointing","title":"Checkpointing (advanced)","description":"When using SLURM, the StopesModule system uses submitit to schedule the jobs.","sidebar":"quickstartSidebar"},"stopes/advanced/debugging":{"id":"stopes/advanced/debugging","title":"Debugging","description":"You can launch an individual module with:","sidebar":"quickstartSidebar"},"stopes/advanced/dynamic":{"id":"stopes/advanced/dynamic","title":"Dynamic Initializing Modules (advanced)","description":"It is easy to initialize a module like a normal python class with`","sidebar":"quickstartSidebar"},"stopes/cache":{"id":"stopes/cache","title":"Caching/Memoization","description":"An important part of the launcher is its caching system. When you call the","sidebar":"quickstartSidebar"},"stopes/configuration":{"id":"stopes/configuration","title":"Configuration","description":"We use hydra for configuration. You should probably check out the hydra","sidebar":"quickstartSidebar"},"stopes/index":{"id":"stopes/index","title":"stopes Module Framework","description":"The stopes library was built for easily managing complex pipelines without","sidebar":"quickstartSidebar"},"stopes/module":{"id":"stopes/module","title":"Module Overview","description":"A module is a python class that extends StopesModule:","sidebar":"quickstartSidebar"},"stopes/pipelining":{"id":"stopes/pipelining","title":"Composition (aka pipelining)","description":"The StopesModule framework provides a \\"launcher\\" abstraction that takes care of","sidebar":"quickstartSidebar"}}}')}}]);