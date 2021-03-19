document.getElementById("submitBtn").
addEventListener("click", hitunglah);

function hitunglah(){
    var x = document.getElementById("opsiPerhitungan").value;
    if (x == 1){
        hitung_luas_bola()
    }else if(x == 2){
        hitung_volume_bola()
    }else if(x == 3){
        hitung_luas_permukaan_tabung()
    }else if(x == 4){
        hitung_luas_tabung()
    }
}

function hitung_luas_bola(){
    jari = document.getElementById('jari').value;
    tinggi = document.getElementById('tinggi').value;
    var permukaanBola = (4*3.14*(parseInt(jari)*parseInt(jari)));
    document.getElementById("hasil_perhitungan").innerHTML=permukaanBola;
    document.getElementById("judul_hitung").innerHTML="Hasil Perhitungan luas Bola";
}

function hitung_volume_bola(){
    jari = document.getElementById('jari').value;
    tinggi = document.getElementById('tinggi').value;
    var kubikBola = (4/3*3.14*(parseInt(jari)*parseInt(jari)*parseInt(jari)));
    document.getElementById("hasil_perhitungan").innerHTML=kubikBola;
    document.getElementById("judul_hitung").innerHTML="Hasil Perhitungan Volume Bola";
}

function hitung_luas_permukaan_tabung(){
    jari = document.getElementById('jari').value;
    tinggi = document.getElementById('tinggi').value;
    var luasPermukaanTabung = (2*3.14*(parseInt(jari)*(parseInt(jari)+parseInt(tinggi))));
    document.getElementById("hasil_perhitungan").innerHTML=luasPermukaanTabung;
    document.getElementById("judul_hitung").innerHTML="Hasil Perhitungan Permukaan Tabung";
}

function hitung_luas_tabung(){
    jari = document.getElementById('jari').value;
    tinggi = document.getElementById('tinggi').value;
    var VolTabung1 = (3.14*(parseInt(jari)*parseInt(jari)*parseInt(tinggi)));
    document.getElementById("hasil_perhitungan").innerHTML=VolTabung1;
    document.getElementById("judul_hitung").innerHTML="Hasil Perhitungan Volume tabung";
}