// jQuery
//$.getScript('https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js');
//$.getScript('https://cdn.datatables.net/responsive/1.0.6/js/dataTables.responsive.min.js');
//$.getScript('https://cdn.datatables.net/plug-ins/1.10.7/integration/bootstrap/3/dataTables.bootstrap.js', function () {
//    // script is now loaded and executed.
//    // put your dependent JS here.
//   
//    initilizeQuickDatatables()
//});

function initilizeQuickDatatables(element) {
    alert("s");



};

function preventSorting(evt) {
    if (evt.stopPropagation !== undefined) {
        evt.stopPropagation();
    } else {
        evt.cancelBubble();
    }
}

$.fn.quickDataTable = function () {
    // $.getScript('https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js');
    //    $.getScript('https://cdn.datatables.net/responsive/1.0.6/js/dataTables.responsive.min.js');
    //$.getScript('https://cdn.datatables.net/plug-ins/1.10.7/integration/bootstrap/3/dataTables.bootstrap.js', function () {
    // script is now loaded and executed.
    // put your dependent JS here.
    var script_arr = [
    'https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js',
    'https://cdn.datatables.net/responsive/1.0.6/js/dataTables.responsive.min.js',
    'https://cdn.datatables.net/plug-ins/1.10.7/integration/bootstrap/3/dataTables.bootstrap.js'
];

    // $.getMultiScripts(script_arr).done(function () {
    // all scripts loaded
    // initilizeQuickDatatables(this);

     var rowToAppend='';
    // Setup - add a text input to each footer cell
    $(this).find('thead th').each(function () {
        var title = $(this).text().trim();
       // $(this).append('<br/><input type="text" onclick="preventSorting(event)" placeholder="' + title + '" style="font-weight:normal;width:auto;" />');
          rowToAppend = rowToAppend + '<td><input type="text" onclick="preventSorting(event)" placeholder="' + title + '" style="font-weight:normal;width:auto;" /></td>';
    });
      rowToAppend = '<tr>' + rowToAppend + '</tr>';
          $(this).find("thead tr:first").after(rowToAppend);

    // DataTable
    var table = $(this).DataTable({
        "scrollX": true,
        "lengthMenu": [[10, 20, 30, 40, 50, 100, 150, 200, 250, 500, -1], [10, 20, 30, 40, 50, 100, 150, 200, 250, 500, "All"]],
        fixedColumns: { leftColumns: 1 },
        buttons: [
        'copy', 'excel', 'pdf'
        ],
        colReorder: true,
        scrollY:        "300px",
        scrollX:        true,
        scrollCollapse: true,
        //paging:         false

    });

    // Apply the search
    table.columns().every(function () {
        var that = this;
        $('input', this.header()).on('keyup change', function () {
            if (that.search() !== this.value) {
                that
                        .search(this.value)
                        .draw();
            }
        });
    });
    // });
};

$.getMultiScripts = function (arr) {
    var _arr = $.map(arr, function (scr) {
        return $.getScript(scr);
    });

    _arr.push($.Deferred(function (deferred) {
        $(deferred.resolve);
    }));

    return $.when.apply($, _arr);
}
