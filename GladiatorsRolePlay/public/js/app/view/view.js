function gameView(){
    var armor = null;
    var kg = null;
    var shieldHealth = null;
    var choseWeapon = new Object();
    $("#light-w").hide();
    $("#mid-w").hide();
    $("#heavy-w").hide();
    $('.shield-hp').hide();

    $('input[name="weapon"]').on('change', function(){
        var checkedWeapon = $('input[name="weapon"]:checked').val();
        switch(checkedWeapon){
            case 'light-weapon':
                $("#light-w").show();
                $("#mid-w").hide();
                $("#heavy-w").hide();
                break;
            case 'mid-weapon':
                $("#light-w").hide();
                $("#mid-w").show();
                $("#heavy-w").hide();
                break;
            case 'heavy-weapon':
                $("#light-w").hide();
                $("#mid-w").hide();
                $("#heavy-w").show();
                break;
        }
    });

    $('#glad-stats').on('change', function (){
        var selectedHelmet = document.getElementById("helmet").selectedIndex;
        var helmet = parseInt(document.getElementById("helmet").options[selectedHelmet].value);

        var selectedChest = document.getElementById("chestplate").selectedIndex;
        var chestplate = parseInt(document.getElementById("chestplate").options[selectedChest].value);

        var selectedArms = document.getElementById("arms").selectedIndex;
        var arms = parseInt(document.getElementById("arms").options[selectedArms].value);

        var selectedPants = document.getElementById("pants").selectedIndex;
        var pants = parseInt(document.getElementById("pants").options[selectedPants].value);

        var selectedBoots = document.getElementById("boots").selectedIndex;
        var boots = parseInt(document.getElementById("boots").options[selectedBoots].value);
        
        var selectedShield = document.getElementById("shield").selectedIndex;
        var shield = parseInt(document.getElementById("shield").options[selectedShield].value);
        
        armor = helmet + chestplate + arms + pants + boots;
        kg = helmet + chestplate + arms + pants + boots + shield;
        $('.glad-armor').val('ARMOR: '+ armor);
        if(selectedShield){
            shieldHealth = shield * 2;
            $('.shield-hp').show();
        }
        
        
        var selectedLightWeapon = document.getElementById("light-weapon").selectedIndex;
        var selectedMidWeapon = document.getElementById("mid-weapon").selectedIndex;
        var selectedHeavyWeapon = document.getElementById("heavy-weapon").selectedIndex;
        switch(selectedLightWeapon){
            case 1:
                choseWeapon = smallSword;
                break;
            case 2:
                choseWeapon = dagger;
                break;
            case 3:
                choseWeapon = tomahawk;
                break;
            case 4:
                choseWeapon = stiletto;
                break;
            case 5:
                choseWeapon = nunchucks;
                break;   
        };

        switch(selectedMidWeapon){
            case 1:
                choseWeapon = onehandedSword;
                break;
            case 2:
                choseWeapon = mace;
                break;
            case 3:
                choseWeapon = spear;
                break;
            case 4:
                choseWeapon = smallKatana;
                break;
            case 5:
                choseWeapon = axe;
                break;
        };

        switch(selectedHeavyWeapon){
            case 1:
                choseWeapon = rapier;
                break;
            case 2:
                choseWeapon = bigKatana;
                break;
            case 3:
                choseWeapon = bigClub;
                break;
            case 4:
                choseWeapon = twohandedSword;
                break;
            case 5:
                choseWeapon = hammer;
                break;
        };

    });
    


    $('.save-gladiator').on('click', function(){
        var helmetSel = $('#helmet').val();
        var chestSel = $('#chestplate').val();
        var armsSel = $('#arms').val();
        var pantsSel = $('#pants').val();
        var bootsSel = $('#boots').val();

        
    
        if(helmetSel && chestSel && armsSel && pantsSel && bootsSel){
                console.log(armor, kg);  
                console.log(choseWeapon.damage);
               
                var selectedFirstSkill = $('input[name=first-skill]:checked').val();
                var selectedSecondSkill = $('input[name=first-skill]:checked').val();
                var selectedThirdSkill = $('input[name=first-skill]:checked').val();
        
                switch(selectedFirstSkill){
                    case '1':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Целебные травы 'Active' (Позволяют остановить кровотечение и восстановить 20хп)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '2':
                        $('#skill-bar').prepend("</br><div class=\"passive-skill\">Дохака 'Passive'(Покрывает дымом, делает невозможным разглядеть твое снаряжение)</div><input type=\"radio\" id=\"used-skill\"/>");
                        $('#skill-bar').prepend("</br><div class=\"passive-skill\">Дохака 'Passive'(Покрывает дымом, делает невозможным разглядеть твое снаряжение)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '3':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Волчья трава 'Active'(Восстанавливает стамину)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
                }

                switch(selectedSecondSkill){
                    case '1':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Захват 'Active'(Станит врага)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '2':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Рубящий удар 'Active'(Наносит 25 урона)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '3':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Бэк-слеб 'Active'(Умножает урон x2, но если вы не попали - то урон наносится вам, в размере 1x)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
                }

                switch(selectedThirdSkill){
                    case '1':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Ведьмачье зрение 'Active'(Позволяет увидеть хп, стамину, армор врага)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '2':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Ведьмачья реакция 'Active'(Позволяет парировать атаку врага)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '3':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Вампир 'Active'(Наносит врагу 5хп урона и вызывает кровотечение 1ур.)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
                }




                $('#glad-stats').hide();
        } 
    });


    $('#attack').on('click', function(){
        function randomInt(min, max){
            var rand = Math.floor(Math.random() * (max - min)) + min;
            return rand;
        }

        var cube = randomInt(0, 100);
    
      
        
        var staminaNow = parseInt($('#glad-stamina').val());
        if(staminaNow < choseWeapon.weight && staminaNow < 100){
            alert('Недостаточно стамины!');
        } else{
            var staminaLeft = staminaNow - choseWeapon.weight;
            $('#glad-stamina').val(staminaLeft);
            


            var chosedPartForAttack = $('input[name=select-attack]:checked').val();
        switch(chosedPartForAttack){
            case 'head':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 3 +' урона');
            }
            else if(cube > kg && cube < choseWeapon.crit){
                alert('Попадание. '+ choseWeapon.damage +' урона');
            }
            else if(cube < kg){
                alert('Промах');
            }
            break;


            case 'top-chest':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 2 +' урона');
            }
            else if(cube > kg && cube < choseWeapon.crit){
                alert('Попадание. '+ choseWeapon.damage +' урона');
            }
            else if(cube < kg){
                alert('Промах');
            }
            break;


            case 'bottom-chest':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 2 +' урона');
            }
            else if(cube > kg && cube < choseWeapon.crit){
                alert('Попадание. '+ choseWeapon.damage +' урона');
            }
            else if(cube < kg){
                alert('Промах');
            }
            break;


            case 'left-arm':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 1.5 +' урона');
            }
            else if(cube > kg && cube < choseWeapon.crit){
                var floorDmg = Math.floor((choseWeapon.damage) - ((20*choseWeapon.damage)/100));
                alert('Попадание. '+ floorDmg +' урона');
            }
            else if(cube < kg){
                alert('Промах');
            }
            break;


            case 'right-arm':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 1.5 +' урона');
            }
            else if(cube > kg && cube < choseWeapon.crit){
                var floorDmg = Math.floor((choseWeapon.damage) - ((20*choseWeapon.damage)/100));
                alert('Попадание. '+ floorDmg +' урона');
            }
            else if(cube < kg){
                alert('Промах');
            }
            break;


            case 'left-leg':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 1.5 +' урона');
            }
            else if(cube > kg && cube < choseWeapon.crit){
                var floorDmg = Math.floor((choseWeapon.damage) - ((25*choseWeapon.damage)/100));
                alert('Попадание. '+ floorDmg +' урона');
            }
            else if(cube < kg){
                alert('Промах');
            }
            break;


            case 'right-leg':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 1.5 +' урона');
            }
            else if(cube > kg && cube < choseWeapon.crit){
                var floorDmg = Math.floor((choseWeapon.damage) - ((25*choseWeapon.damage)/100));
                alert('Попадание. '+ floorDmg +' урона');
            }
            else if(cube < kg){
                alert('Промах');
            }
            break;
        }
        }
        

        
        
    });

    

            $('#stamina-recover').on('click', function(){
                var staminaNow = parseInt($('#glad-stamina').val());
                var recovered = staminaNow + 33;
                $('#glad-stamina').val(recovered);
                if(staminaNow > 100){
                    $('#glad-stamina').val(100);
                }
                alert('Вы восстановили стамину!');
            });



            $('#counterattack').on('click', function(){
                var staminaNow = parseInt($('#glad-stamina').val());
                if(staminaNow >= 25){
                    var counterA = staminaNow - 25;
                    $('#glad-stamina').val(counterA);
                    alert('Контратака готова!')
                } else{
                    alert('Недостаточно стамины!')
                }
            });



            $('#block').on('click', function(){
                var staminaNow = parseInt($('#glad-stamina').val());
                if(staminaNow >= 25){
                    var block = staminaNow - 25;
                    $('#glad-stamina').val(block);
                    alert('Блок готов!')
                } else{
                    alert('Недостаточно стамины!')
                }
            });

}