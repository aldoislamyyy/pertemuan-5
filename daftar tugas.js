<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Tugas Harian</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #tugas-list {
            list-style-type: none;
            padding: 0;
        }
        #tugas-list li {
            padding: 10px;
            margin: 5px 0;
            background-color: #f0f0f0;
            border-radius: 4px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .actions button {
            margin-left: 5px;
        }
    </style>
</head>
<body>

    <h1>Daftar Tugas Harian</h1>

    <input type="text" id="tugas-input" placeholder="Tambah tugas baru" />
    <button onclick="tambahTugas()">Tambah Tugas</button>

    <ul id="tugas-list"></ul>

    <script>
        function tambahTugas() {
            const tugasInput = document.getElementById('tugas-input');
            const tugas = tugasInput.value.trim();

            if (tugas === '') {
                alert('Silakan masukkan tugas');
                return;
            }

            const li = document.createElement('li');
            li.innerHTML = `<span>${tugas}</span>
                <div class="actions">
                    <button onclick="editTugas(this)">Edit</button>
                    <button onclick="hapusTugas(this)">Hapus</button>
                </div>`;
            
            document.getElementById('tugas-list').appendChild(li);
            tugasInput.value = ''; // Clear input after adding
        }

        function hapusTugas(button) {
            const li = button.parentElement.parentElement;
            li.remove();
        }

        function editTugas(button) {
            const li = button.parentElement.parentElement;
            const span = li.querySelector('span');
            const tugasBaru = prompt('Edit tugas:', span.textContent);

            if (tugasBaru !== null && tugasBaru.trim() !== '') {
                span.textContent = tugasBaru;
            }
        }
    </script>

</body>
</html>
