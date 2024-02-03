function tema(namakota)
{
	var i;
	var x = document.getElementsByClassName("kota");
	for (i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
	document.getElementById(namakota).style.display = "block";
}

function hero(namaHero)
{
	var i;
	var x = document.getElementsByClassName("hero");
	for (i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
	document.getElementById(namaHero).style.display = "block";
}