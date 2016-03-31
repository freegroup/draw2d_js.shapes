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

    });
}