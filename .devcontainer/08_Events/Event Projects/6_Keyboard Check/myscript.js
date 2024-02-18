const insert = document.querySelector('.insert')

window.addEventListener('keydown', function(e){
    insert.innerHTML = `
    <div style='font-size:20px; padding: 20px;'>
        <table style='border: double 5px; padding: 10px;'>
            <tr>
                <th> Key</th>
                <th> KeyDown</th>
                <th> code</th>
            </tr>
            <tr>
                <td>${e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `
}, false)