//var dice = [['Austgen','Grube','Heinzman','Herre','Hofer','Samano','Zekovic'],['Davis', 'Gainey', 'Klump', 'Postma']];

//var dice = { "D6": ['Craig Austgen','Daniel Davis','Benjamin Davisson','William Decker','Zachary Dickinson','Katie Harold','Eric Heinzman','Phillip Hofer','Troy Key','Andrew Klump','Kyle Lowtharp','Collin Mullis','Gabriel Perez','Ryan Postma','Kevin Regner','Andrew Ribicki','Connor Ring','Nathan Samano','Griffin Scott','Jared Smith'], "D10": ['Thaddeus Albert','Dan Amador','Bruce Anderson','Zachary Aring','Benjamin Davisson','Jace Horner','Carl Jones','Kyle Lowtharp','Declan McCarron','Collin Mullis','Yemi Ogunbameru','Andrew Ribicki','Christian Sexton','Houston Shimala','Ryan Slipher','Jared Smith','Ashlee Troop'], "D12": ['Craig Austgen','Daniel Davis','Dylan Gainey','Lucas Grube','Eric Heinzman','Katelyn Herre','Phillip Hofer','Andrew Klump','Ryan Postma','Nathan Samano','Danilo Zekovic'], "D20": ['Craig Austgen','Lucas Grube','Eric Heinzman','Phillip Hofer','Nathan Samano','Danilo Zekovic']};

//declare dice maps, D6, D10, D12, D20
var dice = { "D6":
        ['1','2','3','4','5','6'], "D10":
        ['1','2','3','4','5','6','7','8','9','10'], "D12":
        ['1','2','3','4','5','6','7','8','9','10','11', '12'], "D20":
        ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16',
'17','18','19','20']}
 
//chooses a random number from the chosen dice
function chooseOne(die) {
  var thisDie = dice[die];

  var n = thisDie.length;
  var which = Math.floor(Math.random() * n);

  print('The Die Roll Is: ' + thisDie[which]);
}
//Test each die
chooseOne("D6");
chooseOne("D10");
chooseOne("D12");
chooseOne("D20");
