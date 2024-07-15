// document.querySelectorAll(".active").forEach(cell => {
//     cell.addEventListener("click", () => {
//         alert(cell.textContent);
//     })
// });

document.addEventListener('DOMContentLoaded', function() {
    const activeCells = document.querySelectorAll('.active');

    activeCells.forEach(cell => {
        cell.addEventListener('click', function() {
            const eventDetails = this.innerHTML;
            displayEventDetails(eventDetails);
        });
    });
});

function displayEventDetails(details) {
    // Create a modal element
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'eventModal';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="eventModalLabel">Event Details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ${details}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Initialize and show the modal using Bootstrap's modal plugin
    const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
    eventModal.show();

    // Remove modal from DOM when it is closed
    modal.addEventListener('hidden.bs.modal', function () {
        modal.remove();
    });
}
