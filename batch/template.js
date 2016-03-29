
app.view.clear();
var code = null;
var img  = null;
var reader = new draw2d.io.json.Reader();
reader.unmarshal(app.view,json);


new draw2d.io.png.Writer().marshal(app.view, function (imageDataUrl, base64) {
    img = base64;
    var writer = new shape_designer.FigureWriter();
    writer.marshal(app.view, "testShape", function (js) {
        code = js;
    });


}, app.view.getBoundingBox().scale(10, 10));

