$(document).ready(function () {
  dataTable = $('#example').DataTable({
    // Hidden Column
    columnDefs: [
      {
        targets: [],
        visible: false,
      },
    ],

    // Export Files Buttons
    dom: 'Blfrtip',
    buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],

    // Language
    language: {
      url: 'http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json',
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

  // Checkbox Filter
  $('.filter-checkbox').on('change', function (e) {
    var searchTerms = [];
    $.each($('.filter-checkbox'), function (i, elem) {
      if ($(elem).prop('checked')) {
        searchTerms.push('^' + $(this).val() + '$');
      }
    });
    dataTable.column(2).search(searchTerms.join('|'), true, false, true).draw();
  });

  // Select Filter - Column 7
  $('#search_7').on('change', function (e) {
    var status = $(this).val();
    $('#search_7').val(status);
    console.log(status);
    //dataTable.column(6).search('\\s' + status + '\\s', true, false, true).draw();
    dataTable.column(7).search(status).draw();
  });

  // Select Filter - Column 8
  $('#search_8').on('change', function (e) {
    var status = $(this).val();
    $('#search_8').val(status);
    console.log(status);
    //dataTable.column(6).search('\\s' + status + '\\s', true, false, true).draw();
    dataTable.column(8).search(status).draw();
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

  // Search Filter - Column 0
  $('#search_0').on('keyup change', function (e) {
    var that = $(this).val();
    $('#search_0').val(that);
    console.log(that);
    // dataTable.column().search('\\s' + that + '\\s', true, false, true).draw();
    dataTable.column(0).search(that).draw();
  });

  // Search Filter - Column 1
  $('#search_1').on('keyup change', function (e) {
    var that = $(this).val();
    $('#search_1').val(that);
    console.log(that);
    // dataTable.column().search('\\s' + that + '\\s', true, false, true).draw();
    dataTable.column(1).search(that).draw();
  });

  // Search Filter - Column 2
  $('#search_2').on('keyup change', function (e) {
    var that = $(this).val();
    $('#search_2').val(that);
    console.log(that);
    // dataTable.column().search('\\s' + that + '\\s', true, false, true).draw();
    dataTable.column(2).search(that).draw();
  });

  // Show/Hide Columns - Testing
  $('a .toggle-vis').on('click', function (e) {
    e.preventDefault();

    // Get the column API object
    var column = table.column($(this).attr('data-column'));

    // Toggle the visibility
    column.visible(!column.visible());
  });
});

// Date Range Filter
$(document).ready(function () {
  // Custom filtering function which will search data in column four between two values
  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
    var min = minDate.val();
    // console.log('min', min);
    var max = maxDate.val();
    // console.log('min', min);
    var date = moment(new Date(data[1]));
    // console.log('date', date);

    if (
      (min === null && max === null) ||
      (min === null && date <= max) ||
      (min <= date && max === null) ||
      (min <= date && date <= max)
    ) {
      return true;
    }
    return false;
  });

  // Create date inputs
  minDate = new DateTime($('#minDate'), {
    format: 'YYYY/MM/DD',
  });
  maxDate = new DateTime($('#maxDate'), {
    format: 'YYYY/MM/DD',
  });

  // DataTables initialisation
  var table = $('#example').DataTable();

  // Refilter the table
  $('#minDate, #maxDate').on('change', function () {
    table.draw();
  });
});
