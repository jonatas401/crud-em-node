// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud$1.0.0/src/app/views/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Document</title><link rel=stylesheet href=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css integrity=sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2 crossorigin=anonymous><script src=https://code.jquery.com/jquery-3.5.1.slim.min.js integrity=sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js integrity=sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN crossorigin=anonymous></script><script src=https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js integrity=sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s crossorigin=anonymous></script></head><body><div class=container><h1> cadastrar </h1> <form action=/alunos method=post><input name=id" +
    marko_attr("value", "" + data.id) +
    " type=hidden><div class=col><label for=nome>nome: </label><div class=input-group><div class=input-group-prepend></div> <input" +
    marko_attr("value", data.nome) +
    " name=nome placeholder=\"coloque seu nome\"></div> </div> <div class=col><label for=email>email: </label><div class=input-group><div class=input-group-prepend><span class=input-group-text id=inputGroupPrepend2>@</span></div><input class=input-group-text" +
    marko_attr("value", data.email) +
    " name=email placeholder=\"coloque seu nome\"></div> <div class=\"form-row align-items-center\"><div class=\"col-auto my-0\"><label for=curso class>curso: </label> <select name=curso class=\"custom-select mr-sm-0\"><option" +
    marko_attr("value", data.curso) +
    ">" +
    marko_escapeXml(data.curso) +
    "</option><option value=\"Informatica Para Internet\">Informatica Para Internet</option><option value=\"gestão de qualidade\">gestão de qualidade</option><option value=Ads>Analise e Desenvolvimento de Sistemas</option></select></div></div><button class=\"btn btn-dark\">inserir</button> <a class=\"btn btn-danger\" href=/ >cancelar</a></div></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "32");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud$1.0.0/src/app/views/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
