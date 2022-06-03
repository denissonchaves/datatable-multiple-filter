$.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
  var min = parseInt($('#min').val(), 10);
  var max = parseInt($('#max').val(), 10);
  var order = parseFloat(data[0]) || 0; // use data for the order column

  if (
    (isNaN(min) && isNaN(max)) ||
    (isNaN(min) && order <= max) ||
    (min <= order && isNaN(max)) ||
    (min <= order && order <= max)
  ) {
    return true;
  }
  return false;
});

$(document).ready(function () {
  // Only needed for the filename of export files.
  // Normally set in the title tag of your porder.
  document.title = 'Simple DataTable';
  // Create search inputs in footer
  $('#example tfoot th').each(function () {
    var title = $(this).text();
    $(this).html('<input type="text" placeholder="Search ' + title + '" />');
  });
  // DataTable initialisation
  var table = $('#example').DataTable({
    dom: '<"dt-buttons"Bf><"clear">lirtp',
    paging: true,
    autoWidth: true,
    buttons: [
      'colvis',
      'copyHtml5',
      'csvHtml5',
      'excelHtml5',
      'print',
    ],
    initComplete: function (settings, json) {
      var footer = $('#example tfoot tr');
      $('#example thead').append(footer);
    },
  });

  // Event listener to the two range filtering inputs to redraw on input
  $('#min, #max').keyup(function () {
    table.draw();
  });

  // Apply the search
  $('#example thead').on('keyup', 'input', function () {
    table.column($(this).parent().index()).search(this.value).draw();
  });
});
