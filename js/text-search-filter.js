$(document).ready(function () {
  // Setup - add a text input to each footer cell
  $('#example tfoot th').each(function () {
    var title = $(this).text();
    $(this).html('<input type="text" placeholder="Pesquise por ' + title + '" />');
  });
  
  // DataTable
  var table = $('#example').DataTable({
    
    "language": {
      "url": "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
    },

    // orderCellsTop: true,
    // fixedHeader: true,

    initComplete: function () {
      // Apply the search
      this.api().columns().every(function () {

        var that = this;

        $('input', this.footer()).on('keyup change clear', function () {

          if (that.search() !== this.value) {
            that.search(this.value).draw();
          }

        });

      });

    },

    initComplete: function () {
      this.api().columns([2]).every(function () {
          var column = this;
          var select = $('<select><option value=""></option></select>')
            .appendTo($(column.footer()).empty())
            .on('change', function () {
              var val = $.fn.dataTable.util.escapeRegex($(this).val());
  
              column.search(val ? '^' + val + '$' : '', true, false).draw();
            });
  
          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.append('<option value="' + d + '">' + d + '</option>');
            });
      });
    }
    
  });
  
});
