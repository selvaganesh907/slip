  // Function to switch between different main sections/pages
        function showSection(sectionId) {
            const sections = document.querySelectorAll('.section');
            sections.forEach(sec => sec.classList.add('hidden'));
            document.getElementById(sectionId).classList.remove('hidden');
        }

        // Simulate successful login and transition to the profile/dashboard page
        function handleLogin(event) {
            event.preventDefault();
            alert('Sign in successful! Welcome to PayGen.');
            // Automatically switch to Profile or Dashboard view on success
            showSection('profile'); 
        }













        document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const nextPageContent = document.getElementById('nextPageContent');

    // Click handler to reveal the hidden contents / simulated next page view
    generateBtn.addEventListener('click', () => {
        nextPageContent.classList.toggle('hidden');
        
        // Scroll view down smoothly to reveal the content block
        if(!nextPageContent.classList.contains('hidden')) {
            nextPageContent.scrollIntoView({ behavior: 'smooth' });
        }
    });
});





























        // State Variables for Payslip
let payslipData = {};

// Navigation Event Handlers
document.getElementById('btn-generate').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    calculateAndStore();
    alert('Payslip Generated! Click "Payslip Review / Preview" to view.');
});

document.getElementById('btn-preview-nav').addEventListener('click', function() {
    // Navigate to Preview Page
    document.getElementById('generation-page').classList.remove('active');
    document.getElementById('preview-page').classList.add('active');
    renderPreview();
});

document.getElementById('btn-back').addEventListener('click', function() {
    // Navigate back to Generation Page
    document.getElementById('preview-page').classList.remove('active');
    document.getElementById('generation-page').classList.add('active');
});

// Calculate And Store Details
function calculateAndStore() {
    // Employee Details
    payslipData.name = document.getElementById('emp-name').value;
    payslipData.id = document.getElementById('emp-id').value;
    payslipData.designation = document.getElementById('emp-designation').value;
    payslipData.department = document.getElementById('emp-department').value;
    payslipData.month = document.getElementById('emp-month').value;
    payslipData.year = document.getElementById('emp-year').value;

    // Earnings
    payslipData.basic = parseFloat(document.getElementById('basic-pay').value) || 0;
    payslipData.hra = parseFloat(document.getElementById('hra').value) || 0;
    payslipData.allowance = parseFloat(document.getElementById('allowance').value) || 0;
    payslipData.bonus = parseFloat(document.getElementById('bonus').value) || 0;

    // Deductions
    payslipData.pf = parseFloat(document.getElementById('pf').value) || 0;
    payslipData.pt = parseFloat(document.getElementById('pt').value) || 0;
    payslipData.otherDeduction = parseFloat(document.getElementById('other-deduction').value) || 0;

    // Calculations
    payslipData.gross = payslipData.basic + payslipData.hra + payslipData.allowance + payslipData.bonus;
    payslipData.totalDeductions = payslipData.pf + payslipData.pt + payslipData.otherDeduction;
    payslipData.netpay = payslipData.gross - payslipData.totalDeductions;
}

// Render Preview Layout
function renderPreview() {
    // Render Details
    document.getElementById('span-name').innerText = payslipData.name;
    document.getElementById('span-id').innerText = payslipData.id;
    document.getElementById('span-designation').innerText = payslipData.designation;
    document.getElementById('span-department').innerText = payslipData.department;
    document.getElementById('span-month-year').innerText = `${payslipData.month} ${payslipData.year}`;

    // Render Earnings
    document.getElementById('span-basic').innerText = payslipData.basic.toFixed(2);
    document.getElementById('span-hra').innerText = payslipData.hra.toFixed(2);
    document.getElementById('span-allowance').innerText = payslipData.allowance.toFixed(2);
    document.getElementById('span-bonus').innerText = payslipData.bonus.toFixed(2);
    document.getElementById('span-gross').innerText = payslipData.gross.toFixed(2);

    // Render Deductions
    document.getElementById('span-pf').innerText = payslipData.pf.toFixed(2);
    document.getElementById('span-pt').innerText = payslipData.pt.toFixed(2);
    document.getElementById('span-other-deduction').innerText = payslipData.otherDeduction.toFixed(2);
    document.getElementById('span-total-deductions').innerText = payslipData.totalDeductions.toFixed(2);

    // Render Net Pay
    document.getElementById('span-netpay').innerText = '₹' + payslipData.netpay.toFixed(2);
}

// Additional Actions
document.getElementById('btn-reset').addEventListener('click', function() {
    document.getElementById('payslip-form').reset();
    payslipData = {};
});

document.getElementById('btn-view').addEventListener('click', function() {
    alert("Full layout loaded with black line box models as visible on this page.");
});

document.getElementById('btn-download').addEventListener('click', function() {
    const alertBox = document.getElementById('alert-box');
    alertBox.innerText = 'Downloading started... Payslip is Ready!';
    alertBox.classList.remove('alert-hidden');

    setTimeout(() => {
        alertBox.classList.add('alert-hidden');
    }, 4000);
});

document.getElementById('btn-print').addEventListener('click', function() {
    window.print();
});

document.getElementById('btn-share').addEventListener('click', function() {
    alert("Payslip link/copy is ready to share!");
});














document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements Mapping
    const searchBar = document.getElementById("searchBar");
    const monthFilter = document.getElementById("monthFilter");
    const yearFilter = document.getElementById("yearFilter");
    const clearBtn = document.getElementById("clearBtn");
    const tableRows = document.querySelectorAll("#tableBody tr");

    // Live Filtering Engine
    function filterTable() {
        const searchText = searchBar.value.toLowerCase();
        const selectedMonth = monthFilter.value;
        const selectedYear = yearFilter.value;

        tableRows.forEach(row => {
            const rowText = row.textContent.toLowerCase();
            const rowMonth = row.getAttribute("data-month");
            const rowYear = row.getAttribute("data-year");

            // Evaluate conditional matching states
            const matchesSearch = rowText.includes(searchText);
            const matchesMonth = selectedMonth === "" || rowMonth === selectedMonth;
            const matchesYear = selectedYear === "" || rowYear === selectedYear;

            if (matchesSearch && matchesMonth && matchesYear) {
                row.classList.remove("hidden");
            } else {
                row.classList.add("hidden");
            }
        });
    }

    // Assigning Event Listeners to Form Fields
    searchBar.addEventListener("input", filterTable);
    monthFilter.addEventListener("change", filterTable);
    yearFilter.addEventListener("change", filterTable);

    // Reset All Inputs Functionality
    clearBtn.addEventListener("click", () => {
        searchBar.value = "";
        monthFilter.value = "";
        yearFilter.value = "";
        filterTable();
    });
});

// Simulate PDF generation download & full-screen presentation workflow
function triggerDownload(periodName) {
    const loader = document.getElementById("loadingOverlay");
    const modal = document.getElementById("pdfModal");
    
    // UI elements update for Document Viewer Mapping
    document.getElementById("modalPeriod").innerText = periodName;
    document.getElementById("pdfTitle").innerText = `Payslip View - ${periodName}`;

    // Activate loading animation container
    loader.classList.remove("hidden");

    // Complete loading simulation execution window
    setTimeout(() => {
        loader.classList.add("hidden"); // Dismiss loader
        modal.classList.remove("hidden"); // Reveal full screen document page view
        document.body.style.overflow = "hidden"; // Freeze scroll tracking behavior
    }, 1200);
}

// Exit Full Page PDF View Target
function closePDF() {
    document.getElementById("pdfModal").classList.add("hidden");
    document.body.style.overflow = "auto";
}





















  function toggleAnswer(button) {
            // Find the answer block adjacent to this question row
            const answerBlock = button.parentElement.nextElementSibling;
            
            // Toggle visibility classes
            button.classList.toggle('active');
            answerBlock.classList.toggle('show');
        }