$(document).ready(function () {
  dataTable = $('#example').DataTable({
    columnDefs: [
      {
        targets: [7],
        visible: false,
      },
    ],

    dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
    ],

    "language": {
      "url": "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
    },
    
  });
  
  // dataTable.columns().every(function () {
  //   var that = this;

  //   $('input', this.footer()).on('keyup change', function () {
  //     if (that.search() !== this.value) {
  //       that.search(this.value).draw();
  //     }
  //   });
  // });

  $('.filter-checkbox').on('change', function (e) {
    var searchTerms = [];
    $.each($('.filter-checkbox'), function (i, elem) {
      if ($(elem).prop('checked')) {
        searchTerms.push('^' + $(this).val() + '$');
      }
    });
    dataTable.column(1).search(searchTerms.join('|'), true, false, true).draw();
  });

  $('.status-dropdown').on('change', function (e) {
    var status = $(this).val();
    $('.status-dropdown').val(status);
    console.log(status);
    //dataTable.column(6).search('\\s' + status + '\\s', true, false, true).draw();
    dataTable.column(7).search(status).draw();
  });

  // $('#example').each(function() {
  //   this.api().columns().every(function () {

  //     var that = this;

  //     $('input', this.footer()).on('keyup change', function () {

  //       if (that.search() !== this.value) {
  //         that.search(this.value).draw();
  //       }

  //     });

  //   });
  // });


  $('#search_0').on('keyup change', function (e) {
    var that = $(this).val();
    $('#search_0').val(that);
    console.log(that);
    // dataTable.column().search('\\s' + that + '\\s', true, false, true).draw();
    dataTable.column().search(that).draw();
  });

});
