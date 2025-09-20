// comparison.js
// Minimal JS for comparison page interactions

// Highlight differences between products
function highlightDifferences() {
    const rows = document.querySelectorAll("table tbody tr");
    rows.forEach(row => {
      const cells = row.querySelectorAll("td");
      if (cells.length === 2) {
        const val1 = cells[0].textContent.trim().toLowerCase();
        const val2 = cells[1].textContent.trim().toLowerCase();
        if (val1 !== "" && val2 !== "" && val1 !== val2) {
          cells[0].classList.add("bg-warning-subtle");
          cells[1].classList.add("bg-warning-subtle");
        }
      }
    });
  }
  
  // Run on page load
  document.addEventListener("DOMContentLoaded", highlightDifferences);
  