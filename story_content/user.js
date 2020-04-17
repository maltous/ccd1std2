function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oydfyNiwR9":
        Script1();
        break;
      case "6CmjGSHxt0X":
        Script2();
        break;
      case "6F2uJeY2VUP":
        Script3();
        break;
      case "6SNmmyyrsKf":
        Script4();
        break;
      case "6Hgrr2o0a4V":
        Script5();
        break;
      case "5xmX2lzezzQ":
        Script6();
        break;
      case "6KQjIZn5k92":
        Script7();
        break;
      case "5Y4muRkY2sO":
        Script8();
        break;
      case "5hsiFPym4Gk":
        Script9();
        break;
      case "6LWUGYdxswU":
        Script10();
        break;
      case "6e1u9n9oC3b":
        Script11();
        break;
      case "65r3L6oy3ev":
        Script12();
        break;
      case "6Ibb7viwmUE":
        Script13();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script11()
{
  $("#tab-customlink").show();
}

function Script12()
{
  $("#tab-customlink").show();
}

function Script13()
{
  window.print();
}

