function loadIndex(){

    $.getJSON("./assets/shapes/index.json", function(data){

        var tmpl = $.templates("#shapeTemplate");
        var html = tmpl.render({shapes:data});

        $("#grid").html(html);

        var $grid = $('#grid');
        $grid.shuffle({
            itemSelector: '.figure-wrap'
        });

        // Advanced filtering
        $('.header .filter').on('keyup change', function() {
            var val = this.value.toLowerCase();
            $grid.shuffle('shuffle', function($el, shuffle) {
                var text = $.trim( $el.find('.picture-item__title').text() ).toLowerCase();
                return text.indexOf(val) !== -1;
            });
        });

        var config = new shinejs.Config({
            numSteps: 10,
            opacity: 0.1,
            opacityPow:3.4,
            offset:0.23,
            offsetPow:3.8,
            blur:59,
            blurPow:1,
            shadowRGB: new shinejs.Color(0,0,0)
        });

        var shine = new Shine(document.getElementById('title'), config);
        window.addEventListener('mousemove', function(event) {
            shine.light.position.x = event.clientX;
            shine.light.position.y = event.clientY;
            shine.draw();
        }, false);

    });
}