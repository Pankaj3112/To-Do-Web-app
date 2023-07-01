const deleteBtn = document.querySelector('#delete-btn');

deleteBtn.addEventListener('click', (e) => {
    let checkedBoxes = document.querySelectorAll('.delete-check-box:checked');
    let checkedBoxesId = [];
    checkedBoxes.forEach((box) => {
        checkedBoxesId.push(box.value);
    });
    
    if (checkedBoxesId.length > 0) {
        let confirmDelete = confirm('Are you sure you want to delete the selected items?');
        if (confirmDelete) {
            let url = '/delete?id='+checkedBoxesId;
            
            let params = {
                method: 'POST',
            };
            fetch(url, params)
            .then((res) => location.reload())
            .catch((err) => {
                console.log(err);
            });
        }
    }

});
