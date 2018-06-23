function gameView(){
    var armor = null;
    var kg = null;
    var defaultKg = null;
    var shieldHealth = null;
    var choseWeapon = new Object();
    $("#light-w").hide();
    $("#mid-w").hide();
    $("#heavy-w").hide();
    $('.shield-hp').hide();
    function randomInt(min, max){
        var rand = Math.floor(Math.random() * (max - min)) + min;
        return rand;
    }

    /*function lowStamina(stamina){
        if(stamina < 15){
            alert("У ВАС МАЛО СТАМИНЫ!");
        }
    }*/


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
        var helmetArmor = parseInt(document.getElementById("helmet").options[selectedHelmet].dataset.armor);

        var selectedChest = document.getElementById("chestplate").selectedIndex;
        var chestplate = parseInt(document.getElementById("chestplate").options[selectedChest].value);
        var chestplateArmor = parseInt(document.getElementById("chestplate").options[selectedChest].dataset.armor);

        var selectedArms = document.getElementById("arms").selectedIndex;
        var arms = parseInt(document.getElementById("arms").options[selectedArms].value);
        var armsArmor = parseInt(document.getElementById("arms").options[selectedArms].dataset.armor);

        var selectedPants = document.getElementById("pants").selectedIndex;
        var pants = parseInt(document.getElementById("pants").options[selectedPants].value);
        var pantsArmor = parseInt(document.getElementById("pants").options[selectedPants].dataset.armor);

        var selectedBoots = document.getElementById("boots").selectedIndex;
        var boots = parseInt(document.getElementById("boots").options[selectedBoots].value);
        var bootsArmor = parseInt(document.getElementById("boots").options[selectedBoots].dataset.armor);
        
        var selectedShield = document.getElementById("shield").selectedIndex;
        var shield = parseInt(document.getElementById("shield").options[selectedShield].value);
        
        armor = helmetArmor + chestplateArmor + armsArmor + pantsArmor + bootsArmor;
        kg = helmet + chestplate + arms + pants + boots + shield;
        defaultKg = helmet + chestplate + arms + pants + boots + shield;

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
                var selectedSecondSkill = $('input[name=second-skill]:checked').val();
                var selectedThirdSkill = $('input[name=third-skill]:checked').val();
                
        
                switch(selectedFirstSkill){
                    case '1':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Целебные травы 'Active' (Позволяют остановить кровотечение и восстановить 30хп)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '2':
                        $('#skill-bar').prepend("</br><div class=\"passive-skill\">Дохака 'Passive'(Покрывает дымом, делает невозможным разглядеть твое снаряжение)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '3':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Волчья трава 'Active'(Восстанавливает стамину)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
                    case '4':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Толстокожий \"Passive\"(Уменьшает получаемый урон на 4 единицы)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
                    case '5':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Везунчик \"Passive\"(работает один раз, до первого полученного крита.  Аннулирует урон от крита.)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
                    case '6':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Последний удар \"Passive\"(После смерти, можно нанести еще один удар)</div><input type=\"radio\" id=\"used-skill\"/>");
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
                    case '4':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Коварный удар \"Active\"(стандартный урон оружия  + забирает стамину (стоимость одной атак) у цели)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
                    case '5':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Вампир \"Active\"(Ворует 15хп у врага)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;        
                }

                switch(selectedThirdSkill){
                    case '1':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Ведьмачье зрение \"Active\"(Позволяет увидеть точки защиты и контратаки противника + хп, стамину)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '2':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Ведьмачья реакция 'Active'(Позволяет парировать атаку врага)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
        
                    case '3':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Устрашение  \"Active\"(Наложенное на противника, запрещает ему выбрать вас как цель на протяжении одного хода)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;
                    case '4':
                        $('#skill-bar').prepend("</br><div class=\"ready-skill\">Ловкач \"Active\"(Позволяет походить два раза подряд)</div><input type=\"radio\" id=\"used-skill\"/>");
                        break;    
                }




                $('#glad-stats').hide();
        } 
    });


    $('#shield-hp').on('change', function(){
        var shieldBar = parseInt($('#shield-hp').val());
            switch(shieldBar){
                case 0:
                kg -= 35;
                $('#shield-hp').attr('readonly', true);
                break;
            }
    });


    $('#broken').on('change', function(){
        var broken = $('#broken:checked');
        if(broken){
            kg += 10;
        }
    });

    $('#broken-off').on('change', function(){
        var brokenOff = $('#broken-off:checked');
        if(brokenOff){
            if(kg > defaultKg){
                kg -= 10;
            }
        }
    });


    $('#attack').on('click', function(){
        

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
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 3 +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube > kg && cube < choseWeapon.crit){
                alert('Попадание. '+ choseWeapon.damage +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube < kg){
                alert('Промах\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            break;


            case 'top-chest':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 2 +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube > kg && cube < choseWeapon.crit){
                alert('Попадание. '+ choseWeapon.damage +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube < kg){
                alert('Промах\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            break;


            case 'bottom-chest':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 2 +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube > kg && cube < choseWeapon.crit){
                alert('Попадание. '+ choseWeapon.damage +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube < kg){
                alert('Промах\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            break;


            case 'left-arm':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 1.5 +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube > kg && cube < choseWeapon.crit){
                var floorDmg = Math.floor((choseWeapon.damage) - ((20*choseWeapon.damage)/100));
                alert('Попадание. '+ floorDmg +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube < kg){
                alert('Промах\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            break;


            case 'right-arm':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 1.5 +' урона\n\nКубик: ' + cube) + '\nКилограммы: ' + kg;
            }
            else if(cube > kg && cube < choseWeapon.crit){
                var floorDmg = Math.floor((choseWeapon.damage) - ((20*choseWeapon.damage)/100));
                alert('Попадание. '+ floorDmg +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube < kg){
                alert('Промах\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            break;


            case 'left-leg':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 1.5 +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube > kg && cube < choseWeapon.crit){
                var floorDmg = Math.floor((choseWeapon.damage) - ((25*choseWeapon.damage)/100));
                alert('Попадание. '+ floorDmg +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube < kg){
                alert('Промах\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            break;


            case 'right-leg':
            if(cube > kg && cube > choseWeapon.crit){
                alert('Попадание. КРИТ! '+ choseWeapon.damage * 1.5 +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube > kg && cube < choseWeapon.crit){
                var floorDmg = Math.floor((choseWeapon.damage) - ((25*choseWeapon.damage)/100));
                alert('Попадание. '+ floorDmg +' урона\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            else if(cube < kg){
                alert('Промах\n\nКубик: ' + cube + '\nКилограммы: ' + kg);
            }
            break;
        }
        }
        /*lowStamina(staminaLeft);*/

        
        
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
                if(staminaNow >= 20){
                    var counterA = staminaNow - 20;
                    $('#glad-stamina').val(counterA);
                    alert('Контратака готова!');
                    /*lowStamina(counterA);*/
                } else{
                    alert('Недостаточно стамины!')
                }
            });



            $('#block').on('click', function(){
                var staminaNow = parseInt($('#glad-stamina').val());
                if(staminaNow >= 20){
                    var block = staminaNow - 20;
                    $('#glad-stamina').val(block);
                    alert('Блок готов!');
                    /*lowStamina(block);*/
                } else{
                    alert('Недостаточно стамины!')
                }
            });



            $('#guard-break').on('click', function(){
                var staminaNow = parseInt($('#glad-stamina').val());
                if(staminaNow >= 15){
                    var guardbreak = staminaNow - 15;
                    $('#glad-stamina').val(guardbreak);
                    var chanceGuardBreak = randomInt(1, 100) + Math.floor(kg/2);
                    alert('Пробитие защиты ' + chanceGuardBreak);
                    /*lowStamina(guardbreak);*/
                } else{
                    alert('Недостаточно стамины!');
                }
            });
            

}