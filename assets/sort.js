document.addEventListener('DOMContentLoaded', function () {
  var list = document.querySelector('.sortable-list');
  var btn = document.getElementById('sort-toggle');
  if (!list || !btn) return;

  var ascending = true;

  function render() {
    var items = Array.prototype.slice.call(list.children);
    items.sort(function (a, b) {
      var ta = parseInt(a.getAttribute('data-time'), 10) || 0;
      var tb = parseInt(b.getAttribute('data-time'), 10) || 0;
      return ascending ? ta - tb : tb - ta;
    });
    items.forEach(function (li) { list.appendChild(li); });
    btn.textContent = ascending ? '오래된순 ▲ (클릭: 최신순)' : '최신순 ▼ (클릭: 오래된순)';
  }

  btn.addEventListener('click', function () {
    ascending = !ascending;
    render();
  });

  render();
});
