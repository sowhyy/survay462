// import Grid from 'tui-grid';

const Grid = tui.Grid;
const instance = new Grid({
  el: document.getElementById("grid"), // Container element
  columns: [
    {
      header: "일반코드명",
      name: "name",
    }
  ],
  data: [
    {  name: "서울특별시 중구" },
    {  name: "인천광역시 중구" },
    {  name: "대전광역시 중구" },
    {  name: "대구광역시 중구" },
    {  name: "울산광역시 중구" },
    {  name: "부산광역시 중구" },
  ],
  scrollX: false,
  scrollY: false,
});

// instance.resetData(newData); // Call API of instance's public method
// Grid.applyTheme('striped');; // Call API of static method
Grid.applyTheme('default', {
  cell: {
    normal: {
      background: '#fff',
      border: '#e0e0e0',
      showVerticalBorder: false,
      showHorizontalBorder: true
    },
    header: {
      background: '#196294',
      text: '#fff',
      border: '#e0e0e0'
    },
    selectedHeader: {
      background: '#2f7eb0',
    }
  }
});

