game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"阴间突破",content:function(config, pack) {
            game.playYin = function(fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex)
                        game.playAudio(dir, sex, fn);
                    else if (dir)
                        game.playAudio(dir, fn);
                    else
                        game.playAudio('..', 'extension', '阴间突破', fn);
                }
            };
            lib.skill._yinjiantupo = {
                trigger: { global: 'dieBegin', },
                priority: 2,
                forced: true,
                unique: true,
                frequent: true,
                content: function() {
                    game.playAudio('..', 'extension', '阴间突破', trigger.player.name);
                },
            }
        },precontent:function() {

        },help:{},config:{},package:{
    character:{
        character:{
            "yin_luxun2":["male","wu",3,["yinqianxun","yinlianying"],[]],
            "yin_zhangjiao2":["male","qun",3,["huangtian","yinguidao","yinguishu","yinleiji"],["zhu"]],
            "yin_zhangfei2":["male","shu",4,["yinpaoxiao","yinliyong"],[]],
            "yin_xiahouchun2":["male","wei","4/5",["new_qingjian","yinganglie"],[]],
            "yin_zhouyu2":["male","wu","3/5",["yinyingzi","yinfanjian"],[]],
            "yin_pangtong2":["male","shu",3,["ollianhuan","yinlianhuo","yinniepan"],[]],
            "yin_machao2":["male","shu",5,["yintieji","yinmashu"],[]],
            "yin_zhangliao2":["male","wei",4,["yintuxi"],[]],
            "yin_sunquan2":["male","wu",4,["yinzhiheng","yinquanshu","yinjiuyuan"],["zhu"]],
            "yin_lvbu2":["male","qun",4,["wushuang","yinliyu"],[]],
            "yin_huanggai2":["male","wu",4,["yinzhaxiang","yinkurou"],[]],
            "yin_zhaoyun2":["male","shu",5,["yinlongdan"],[]],
            "yin_zhugeliang2":["male","shu",3,["yinyeguan","yinguanxin","yinkongcheng"],[]],
            "yin_ganning2":["male","wu",4,["yinfenwei","yinqixi"],[]],
            "yin_guojia2":["male","wei",3,["yinyiji","yintiandu"],[]],
            "yin_simayi2":["male","wei",3,["yinfankui","yinguicai"],[]],
            "yin_sunjian2":["male","wu","4/5",["yinyinghun","yinwulie"],[]],
            "yin_sunce2":["male","wu","4/5",["yinzhiba","yinpingdong","ojiang"],["zhu","des:那个男人"]],
            "yin_liubei2":["male","shu",4,["yinrende","yinshiren","jijiang","yinrenshi"],["zhu"]],
            "yin_lvmeng2":["male","wu",5,["yinkeji","yinbotu"],[]],
            "yin_gongsunzan2":["male","qun",4,["yinyicong","yinqiaomeng"],[]],
            "yin_guanyu2":["male","shu",5,["yinwusheng","yinyijue"],[]],
            "yin_huatuo2":["male","qun",3,["yinkailu","yinqingnang","yinjijiu","yinwuqin"],[]],
            "yin_sunshangxiang2":["female","wu",3,["yinjieyin","yinxiaoji","yindaoku"],[]],
            "yin_huaxiong2":["male","qun","6/8",["yinyaowu"],[]],
        },
        translate:{
            "yin_luxun2":"阴陆逊",
            "yin_zhangjiao2":"阴张角",
            "yin_zhangfei2":"阴张飞",
            "yin_xiahouchun2":"阴夏侯惇",
            "yin_zhouyu2":"阴周瑜",
            "yin_pangtong2":"阴庞统",
            "yin_machao2":"阴马超",
            "yin_zhangliao2":"阴张辽",
            "yin_sunquan2":"阴孙权",
            "yin_lvbu2":"阴吕布",
            "yin_huanggai2":"阴黄盖",
            "yin_zhaoyun2":"阴赵云",
            "yin_zhugeliang2":"阴诸葛亮",
            "yin_ganning2":"阴甘宁",
            "yin_guojia2":"阴郭嘉",
            "yin_simayi2":"阴司马懿",
            "yin_sunjian2":"阴孙坚",
            "yin_sunce2":"阴孙策",
            "yin_liubei2":"阴刘备",
            "yin_lvmeng2":"阴吕蒙",
            "yin_gongsunzan2":"阴公孙瓒",
            "yin_guanyu2":"阴关羽",
            "yin_huatuo2":"阴华佗",
            "yin_sunshangxiang2":"阴孙尚香",
            "yin_huaxiong2":"阴华雄",
        },
    },
    card:{
        card:{
        },
        translate:{
        },
        list:[],
    },
    skill:{
        skill:{
            "1":{
                enable:"phaseUse",
                position:"he",
                filterCard:function(card) {
                    return 1;
                },
                selectCard:2,
                filterTarget:function(card, player, target) {
                    return target != player;
                },
                selectTarget:1,
                content:function() {
                    target.damage();
                },
            },
            "2":{
                enable:"phaseUse",
                content:function() {
                    "step 0"
                    player.restoreSkill('yinyeguan')
                },
            },
            yinlongdan:{
                audio:"ext:阴间突破:4",
                group:["yinlongdan_sha","yinlongdan_shan","yinlongdan_shaafter","yinlongdan_shanafter"],
                subSkill:{
                    shanafter:{
                        sub:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event, player) {
                return event.skill == 'yinlongdan_shan';
            },
                        direct:true,
                        content:function() {
                "step 0"
                player.chooseTarget("是否发动【龙胆】令一名角色回复1点体力？", function(card, player, target) {
                    return target.isDamaged();
                })
                "step 1"
                if (result.bool && result.targets && result.targets.length) {
                    var num = [3, 4].randomGet()
                    game.playYin("yinlongdan" + num);
                    player.logSkill('yinlongdan', result.targets[0]);
                    result.targets[0].recover();
                }
            },
                    },
                    shaafter:{
                        sub:true,
                        trigger:{
                            player:"useCard",
                        },
                        direct:true,
                        filter:function(event, player) {
                return event.skill == 'yinlongdan_sha';
            },
                        content:function() {
                "step 0"
                player.chooseTarget("是否发动【龙胆】对一名其他角色造成1点伤害？", function(card, player, target) {
                    return target != player;
                })
                "step 1"
                if (result.bool && result.targets && result.targets.length) {
                    var num = [1, 2].randomGet()
                    game.playYin("yinlongdan" + num);
                    player.logSkill('yinlongdan', result.targets[0]);
                    result.targets[0].damage();
                }
            },
                    },
                    sha:{
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:{
                            name:"shan",
                        },
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function(player) {
                if (!player.countCards('hs', 'shan')) return false;
            },
                        position:"hs",
                        prompt:"将一张闪当杀使用或打出",
                        check:function() { return 1 },
                        precontent:function() {
                var num = [1, 2].randomGet()
                game.playYin("yinlongdan" + num);
            },
                        ai:{
                            effect:{
                                target:function(card, player, target, current) {
                        if (get.tag(card, 'respondSha') && current < 0) return 0.6
                    },
                            },
                            respondSha:true,
                            skillTagFilter:function(player) {
                    if (!player.countCards('hs', 'shan')) return false;
                },
                            order:function() {
                    return get.order({ name: 'sha' }) + 0.1;
                },
                            useful:-1,
                            value:-1,
                            yingbian:function(card, player, targets, viewer) {
                    if (get.attitude(viewer, player) <= 0) return 0;
                    var base = 0,
                        hit = false;
                    if (get.cardtag(card, 'yingbian_hit')) {
                        hit = true;
                        if (targets.filter(function(target) {
                                return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                            })) base += 5;
                    }
                    if (get.cardtag(card, 'yingbian_all')) {
                        if (game.hasPlayer(function(current) {
                                return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                            })) base += 5;
                    }
                    if (get.cardtag(card, 'yingbian_damage')) {
                        if (targets.filter(function(target) {
                                return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag('directHit_ai', true, {
                                    target: target,
                                    card: card,
                                }, true)) && !target.hasSkillTag('filterDamage', null, {
                                    player: player,
                                    card: card,
                                    jiu: true,
                                })
                            })) base += 5;
                    }
                    return base;
                },
                            canLink:function(player, target, card) {
                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                    if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                            target: target,
                            card: card,
                        }, true)) return false;
                    if (player.hasSkill('jueqing') || target.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                    return true;
                },
                            basic:{
                                useful:[5,1],
                                value:[5,1],
                            },
                            result:{
                                target:function(player, target, card, isLink) {
                        var eff = function() {
                            if (!isLink && player.hasSkill('jiu')) {
                                if (!target.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: card,
                                        jiu: true,
                                    })) {
                                    if (get.attitude(player, target) > 0) {
                                        return -7;
                                    } else {
                                        return -4;
                                    }
                                }
                                return -0.5;
                            }
                            return -1.5;
                        }();
                        if (!isLink && target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                target: target,
                                card: card,
                            }, true)) return eff / 1.2;
                        return eff;
                    },
                            },
                            tag:{
                                respond:1,
                                respondShan:1,
                                damage:function(card) {
                        if (card.nature == 'poison') return;
                        return 1;
                    },
                                natureDamage:function(card) {
                        if (card.nature) return 1;
                    },
                                fireDamage:function(card, nature) {
                        if (card.nature == 'fire') return 1;
                    },
                                thunderDamage:function(card, nature) {
                        if (card.nature == 'thunder') return 1;
                    },
                                poisonDamage:function(card, nature) {
                        if (card.nature == 'poison') return 1;
                    },
                            },
                        },
                        sub:true,
                    },
                    shan:{
                        audio:"yinlongdan",
                        enable:["chooseToRespond","chooseToUse"],
                        filterCard:{
                            name:"sha",
                        },
                        viewAs:{
                            name:"shan",
                        },
                        prompt:"将一张杀当闪使用或打出",
                        check:function() { return 1 },
                        position:"hs",
                        viewAsFilter:function(player) {
                if (!player.countCards('hs', 'sha')) return false;
            },
                        precontent:function() {
                var num = [3, 4].randomGet()
                game.playYin("yinlongdan" + num);
            },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function(player) {
                    if (!player.countCards('hs', 'sha')) return false;
                },
                            effect:{
                                target:function(card, player, target, current) {
                        if (get.tag(card, 'respondShan') && current < 0) return 0.6
                    },
                            },
                            order:4,
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[7,2],
                                value:[7,2],
                            },
                            result:{
                                player:1,
                            },
                        },
                        sub:true,
                    },
                },
            },
            yintuxi:{
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                direct:true,
                filter:function(event, player) {
        return event.num > 0 && !event.numFixed && game.hasPlayer(function(target) {
            return target.countCards('hej') > 0 && player != target;
        });
    },
                content:function() {
        "step 0"
        var num = get.copy(trigger.num);
        if (get.mode() == 'guozhan' && num > 2) num = 2;
        player.chooseTarget(get.prompt('new_retuxi'), '获得至多' + get.translation(num) + '名角色的各一张牌，然后弃置等量的牌', [1, num], function(card, player, target) {
            return target.countCards('hej') > 0 && player != target;
        }, function(target) {
            var att = get.attitude(_status.event.player, target);
            if (target.hasSkill('tuntian')) return att / 10;
            return 1 - att;
        });
        "step 1"
        if (result.bool) {
            result.targets.sortBySeat();
            player.logSkill('yintuxi', result.targets);
            player.gainMultiple(result.targets, 'hej');
            player.chooseToDiscard(result.targets.length, true, 'he')
        } else {
            event.finish();
        }
        "step 2"
        if (trigger.num <= 0) game.delay();
    },
                ai:{
                    threaten:1.6,
                    expose:0.2,
                },
            },
            yinyeguan:{
                audio:"ext:阴间突破:2",
                audioname:["jiangwei","re_jiangwei","re_zhugeliang"],
                limit:true,
                mark:true,
                skillAnimation:true,
                animationColor:"orange",
                intro:{
                    content:"limited",
                },
                init:function(player, skill) {
        player.storage[skill] = false;
    },
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                content:function() {
        "step 0"
        player.awakenSkill("yinyeguan");
        if (player.isUnderControl()) {
            game.swapPlayerAuto(player);
        }
        var num = 3;
        if (player.hasSkill('yizhi') && player.hasSkill('guanxing')) {
            num = 5;
        }
        var cards = get.cards(num);
        event.cards = cards;
        var switchToAuto = function() {
            _status.imchoosing = false;
            if (event.dialog) event.dialog.close();
            if (event.control) event.control.close();
            var top = [];
            var judges = player.getCards('j');
            var stopped = false;
            if (!player.hasWuxie()) {
                for (var i = 0; i < judges.length; i++) {
                    var judge = get.judge(judges[i]);
                    cards.sort(function(a, b) {
                        return judge(b) - judge(a);
                    });
                    if (judge(cards[0]) < 0) {
                        stopped = true;
                        break;
                    } else {
                        top.unshift(cards.shift());
                    }
                }
            }
            var bottom;
            if (!stopped) {
                cards.sort(function(a, b) {
                    return get.value(b, player) - get.value(a, player);
                });
                while (cards.length) {
                    if (get.value(cards[0], player) <= 5) break;
                    top.unshift(cards.shift());
                }
            }
            bottom = cards;
            for (var i = 0; i < top.length; i++) {
                ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
            }
            for (i = 0; i < bottom.length; i++) {
                ui.cardPile.appendChild(bottom[i]);
            }
            player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
            game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
            game.delay(2);
        };
        var chooseButton = function(online, player, cards) {
            var event = _status.event;
            player = player || event.player;
            cards = cards || event.cards;
            event.top = [];
            event.bottom = [];
            event.status = true;
            event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）', cards);
            for (var i = 0; i < event.dialog.buttons.length; i++) {
                event.dialog.buttons[i].classList.add('pointerdiv');
            }
            event.switchToAuto = function() {
                    event._result = 'ai';
                    event.dialog.close();
                    event.control.close();
                    _status.imchoosing = false;
                },
                event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function(link) {
                    var event = _status.event;
                    if (link == 'ok') {
                        if (online) {
                            event._result = {
                                top: [],
                                bottom: []
                            }
                            for (var i = 0; i < event.top.length; i++) {
                                event._result.top.push(event.top[i].link);
                            }
                            for (var i = 0; i < event.bottom.length; i++) {
                                event._result.bottom.push(event.bottom[i].link);
                            }
                        } else {
                            var i;
                            for (i = 0; i < event.top.length; i++) {
                                ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                            }
                            for (i = 0; i < event.bottom.length; i++) {
                                ui.cardPile.appendChild(event.bottom[i].link);
                            }
                            for (i = 0; i < event.dialog.buttons.length; i++) {
                                if (event.dialog.buttons[i].classList.contains('glow') == false &&
                                    event.dialog.buttons[i].classList.contains('target') == false)
                                    ui.cardPile.appendChild(event.dialog.buttons[i].link);
                            }
                            player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                            game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                        }
                        event.dialog.close();
                        event.control.close();
                        game.resume();
                        _status.imchoosing = false;
                    } else if (link == 'pileTop') {
                        event.status = true;
                        event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                    } else {
                        event.status = false;
                        event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                    }
                })
            for (var i = 0; i < event.dialog.buttons.length; i++) {
                event.dialog.buttons[i].classList.add('selectable');
            }
            event.custom.replace.button = function(link) {
                var event = _status.event;
                if (link.classList.contains('target')) {
                    link.classList.remove('target');
                    event.top.remove(link);
                } else if (link.classList.contains('glow')) {
                    link.classList.remove('glow');
                    event.bottom.remove(link);
                } else if (event.status) {
                    link.classList.add('target');
                    event.top.unshift(link);
                } else {
                    link.classList.add('glow');
                    event.bottom.push(link);
                }
            }
            event.custom.replace.window = function() {
                for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                    _status.event.dialog.buttons[i].classList.remove('target');
                    _status.event.dialog.buttons[i].classList.remove('glow');
                    _status.event.top.length = 0;
                    _status.event.bottom.length = 0;
                }
            }
            game.pause();
            game.countChoose();
        };
        event.switchToAuto = switchToAuto;

        if (event.isMine()) {
            chooseButton();
            event.finish();
        } else if (event.isOnline()) {
            event.player.send(chooseButton, true, event.player, event.cards);
            event.player.wait();
            game.pause();
        } else {
            event.switchToAuto();
            event.finish();
        }
        "step 1"
        if (event.result == 'ai' || !event.result) {
            event.switchToAuto();
        } else {
            var top = event.result.top || [];
            var bottom = event.result.bottom || [];
            for (var i = 0; i < top.length; i++) {
                ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
            }
            for (i = 0; i < event.cards.length; i++) {
                if (!top.contains(event.cards[i]) && !bottom.contains(event.cards[i])) {
                    ui.cardPile.appendChild(event.cards[i]);
                }
            }
            for (i = 0; i < bottom.length; i++) {
                ui.cardPile.appendChild(bottom[i]);
            }
            player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
            game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
            game.updateRoundNumber();
            game.delay(2);
        }
    },
                ai:{
                    threaten:1.2,
                },
            },
            yinguanxin:{
                audio:"guanxing",
                audioname:["jiangwei","re_jiangwei","re_zhugeliang","gexuan","ol_jiangwei"],
                trigger:{
                    player:["phaseZhunbeiBegin"],
                },
                frequent:true,
                content:function() {
                    "step 0"
                    if (player.isUnderControl()) {
                        game.swapPlayerAuto(player);
                    }
                    var num = game.countPlayer() < 4 ? 3 : 5;
                    var cards = get.cards(num);
                    event.cards = cards;
                    var switchToAuto = function() {
                        _status.imchoosing = false;
                        if (event.dialog) event.dialog.close();
                        if (event.control) event.control.close();
                        var top = [];
                        var judges = player.getCards('j');
                        var stopped = false;
                        if (!player.hasWuxie()) {
                            for (var i = 0; i < judges.length; i++) {
                                var judge = get.judge(judges[i]);
                                cards.sort(function(a, b) {
                                    return judge(b) - judge(a);
                                });
                                if (judge(cards[0]) < 0) {
                                    stopped = true;
                                    break;
                                } else {
                                    top.unshift(cards.shift());
                                }
                            }
                        }
                        var bottom;
                        if (!stopped) {
                            cards.sort(function(a, b) {
                                return get.value(b, player) - get.value(a, player);
                            });
                            while (cards.length) {
                                if (get.value(cards[0], player) <= 5) break;
                                top.unshift(cards.shift());
                            }
                        }
                        bottom = cards;
                        for (var i = 0; i < top.length; i++) {
                            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                        }
                        for (i = 0; i < bottom.length; i++) {
                            ui.cardPile.appendChild(bottom[i]);
                        }
                        if (event.triggername == 'phaseZhunbeiBegin' && top.length == 0) {
                            player.addTempSkill('reguanxing_on');
                        }
                        player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                        game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                        game.delay(2);
                    };
                    var chooseButton = function(online, player, cards) {
                        var event = _status.event;
                        player = player || event.player;
                        cards = cards || event.cards;
                        event.top = [];
                        event.bottom = [];
                        event.status = true;
                        event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）', cards);
                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                            event.dialog.buttons[i].classList.add('pointerdiv');
                        }
                        event.switchToAuto = function() {
                                event._result = 'ai';
                                event.dialog.close();
                                event.control.close();
                                _status.imchoosing = false;
                            },
                            event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function(link) {
                                var event = _status.event;
                                if (link == 'ok') {
                                    if (online) {
                                        event._result = {
                                            top: [],
                                            bottom: []
                                        }
                                        for (var i = 0; i < event.top.length; i++) {
                                            event._result.top.push(event.top[i].link);
                                        }
                                        for (var i = 0; i < event.bottom.length; i++) {
                                            event._result.bottom.push(event.bottom[i].link);
                                        }
                                    } else {
                                        var i;
                                        for (i = 0; i < event.top.length; i++) {
                                            ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                                        }
                                        for (i = 0; i < event.bottom.length; i++) {
                                            ui.cardPile.appendChild(event.bottom[i].link);
                                        }
                                        for (i = 0; i < event.dialog.buttons.length; i++) {
                                            if (event.dialog.buttons[i].classList.contains('glow') == false &&
                                                event.dialog.buttons[i].classList.contains('target') == false)
                                                ui.cardPile.appendChild(event.dialog.buttons[i].link);
                                        }
                                        if (event.top.length == 0) {
                                            player.restoreSkill('yinyeguan');
                                        }
                                        player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                                        game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                                    }
                                    event.dialog.close();
                                    event.control.close();
                                    game.resume();
                                    _status.imchoosing = false;
                                } else if (link == 'pileTop') {
                                    event.status = true;
                                    event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                                } else {
                                    event.status = false;
                                    event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                                }
                            })
                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                            event.dialog.buttons[i].classList.add('selectable');
                        }
                        event.custom.replace.button = function(link) {
                            var event = _status.event;
                            if (link.classList.contains('target')) {
                                link.classList.remove('target');
                                event.top.remove(link);
                            } else if (link.classList.contains('glow')) {
                                link.classList.remove('glow');
                                event.bottom.remove(link);
                            } else if (event.status) {
                                link.classList.add('target');
                                event.top.unshift(link);
                            } else {
                                link.classList.add('glow');
                                event.bottom.push(link);
                            }
                        }
                        event.custom.replace.window = function() {
                            for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                _status.event.dialog.buttons[i].classList.remove('target');
                                _status.event.dialog.buttons[i].classList.remove('glow');
                                _status.event.top.length = 0;
                                _status.event.bottom.length = 0;
                            }
                        }
                        game.pause();
                        game.countChoose();
                    };
                    event.switchToAuto = switchToAuto;

                    if (event.isMine()) {
                        chooseButton();
                        event.finish();
                    } else if (event.isOnline()) {
                        event.player.send(chooseButton, true, event.player, event.cards);
                        event.player.wait();
                        game.pause();
                    } else {
                        event.switchToAuto();
                        event.finish();
                    }
                    "step 1"
                    if (event.result == 'ai' || !event.result) {
                        event.switchToAuto();
                    } else {
                        var top = event.result.top || [];
                        var bottom = event.result.bottom || [];
                        for (var i = 0; i < top.length; i++) {
                            ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                        }
                        for (i = 0; i < bottom.length; i++) {
                            ui.cardPile.appendChild(bottom[i]);
                        }
                        for (i = 0; i < event.cards.length; i++) {
                            if (!top.contains(event.cards[i]) && !bottom.contains(event.cards[i])) {
                                ui.cardPile.appendChild(event.cards[i]);
                            }
                        }
                        if (top.length == 0) {
                            player.restoreSkill('yinyeguan');
                        }
                        player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                        game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                        game.updateRoundNumber();
                        game.delay(2);
                    }
                },
            },
            yinkongcheng:{
                group:["kongcheng1","yinkongcheng2"],
                mod:{
                    targetEnabled:function(card, player, target, now) {
            if (target.countCards('h') == 0) {
                if (card.name == 'sha' || card.name == 'juedou') return false;
            }
        },
                },
                audio:"kongcheng1",
                audioname:["re_zhugeliang"],
                ai:{
                    noh:true,
                    skillTagFilter:function(player, tag) {
            if (tag == 'noh') {
                if (player.countCards('h') != 1) return false;
            }
        },
                },
            },
            "yinkongcheng2":{
                audio:"ext:阴间突破:2",
                init:function(player) {
                    if (!player.storage.yinkongcheng2) player.storage.yinkongcheng2 = [];
                },
                filter:function(event, player) {
                    return player.countCards("h");
                },
                trigger:{
                    global:["phaseEnd","gameDrawAfter"],
                },
                selectCard:-1,
                filterCard:true,
                position:"h",
                discard:false,
                prepare:"throw",
                content:function() {
                    "step 0"
                    player.storage.yinkongcheng2 = player.storage.yinkongcheng2.concat(player.getCards('h'));
                    player.lose(player.getCards('h'), ui.special, 'toStorage');
                    player.addSkill('yinkongcheng3');
                },
            },
            "yinkongcheng3":{
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"phaseUseBefore",
                },
                forced:true,
                content:function() {
                    player.gain(player.storage.yinkongcheng2, 'fromStorage', 'draw');
                    player.storage.yinkongcheng2.length = 0;
                    player.removeSkill("yinkongcheng3");
                },
                mark:true,
                intro:{
                    content:"cardCount",
                    onunmark:function(storage, player) {
                        if (storage && storage.length) {
                            player.$throw(storage, 1000);
                            game.cardsDiscard(storage);
                            game.log(storage, '被置入了弃牌堆');
                            player.storage.yinkongcheng2.length = 0;
                        }
                    },
                },
            },
            "yinqianxun2":{
                trigger:{
                    player:"damageEnd",
                    global:"phaseEnd",
                },
                forced:true,
                audio:"yinqianxun",
                content:function() {
                    player.gain(player.storage.reqianxun2, 'fromStorage', 'draw');
                    player.storage.reqianxun2.length = 0;
                    player.removeSkill('yinqianxun2');
                    game.addVideo('storage', player, ['reqianxun2', get.cardsInfo(player.storage.reqianxun2), 'cards']);
                },
                mark:true,
                intro:{
                    content:"cardCount",
                    onunmark:function(storage, player) {
                        if (storage && storage.length) {
                            player.$throw(storage, 1000);
                            game.cardsDiscard(storage);
                            game.log(storage, '被置入了弃牌堆');
                            player.storage.reqianxun2.length = 0;
                        }
                    },
                },
            },
            yinfenwei:{
                audio:"ext:阴间突破:2",
                round:1,
                usable:1,
                audioname:["heqi"],
                trigger:{
                    global:"useCardToPlayered",
                },
                filter:function(event, player) {
                    if (event.getParent().triggeredTargets3.length > 1) return false;
                    if (get.type(event.card) != 'trick') return false;
                    if (get.info(event.card).multitarget) return false;
                    if (event.targets.length < 2) return false;
                    return true;
                },
                content:function() {
                    "step 0"
                    player.chooseTarget("请选择对其无效的目标", true, [1, trigger.targets.length], function(card, player, target) {
                        return _status.event.targets.contains(target);
                    }).set('ai', function(target) {
                        var trigger = _status.event.getTrigger();
                        if (game.phaseNumber > game.players.length * 2 && trigger.targets.length >= game.players.length - 1 && !trigger.excluded.contains(target)) {
                            return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                        }
                        return -1;
                    }).set('targets', trigger.targets);
                    "step 1"
                    player.logSkill('yinfenwei', result.targets);
                    trigger.getParent().excluded.addArray(result.targets);
                    game.delay();
                },
                group:["yinfenwei_roundcount"],
            },
            yinqixi:{
                audio:"ext:阴间突破:2",
                audioname:["re_ganning","re_heqi"],
                enable:"chooseToUse",
                filterCard:function(card) {
                    return get.color(card) == 'black';
                },
                position:"hes",
                viewAs:{
                    name:"guohe",
                },
                onuse:function(result, player) {
                    player.draw();
                },
                viewAsFilter:function(player) {
                    if ((!player.countCards('hes', { color: 'black' })) || (player.getStat().skill['yinqixi'] >= player.maxHp)) return false;
                },
                prompt:"将一张黑色牌当过河拆桥使用",
                check:function(card) { return 4 - get.value(card) },
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    yingbian:function(card, player, targets, viewer) {
                        if (get.attitude(viewer, player) <= 0) return 0;
                        if (game.hasPlayer(function(current) {
                                return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                            })) return 6;
                        return 0;
                    },
                    result:{
                        target:function(player, target) {
                            var att = get.attitude(player, target);
                            var nh = target.countCards('h');
                            if (att > 0) {
                                var js = target.getCards('j');
                                if (js.length) {
                                    var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                    if (jj.name == 'guohe' || js.length > 1 || get.effect(target, jj, target, player) < 0) {
                                        return 3;
                                    }
                                }
                                if (target.getEquip('baiyin') && target.isDamaged() &&
                                    get.recoverEffect(target, player, player) > 0) {
                                    if (target.hp == 1 && !target.hujia) return 1.6;
                                    if (target.hp == 2) return 0.01;
                                    return 0;
                                }
                            }
                            var es = target.getCards('e');
                            var noe = (es.length == 0 || target.hasSkillTag('noe'));
                            var noe2 = (es.filter(function(esx) {
                                return get.value(esx, target) > 0;
                            }).length == 0);
                            var noh = (nh == 0 || target.hasSkillTag('noh'));
                            if (noh && (noe || noe2)) return 0;
                            if (att <= 0 && !target.countCards('he')) return 1.5;
                            return -1.5;
                        },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            yinyiji:{
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                filter:function(event) {
                    return (event.num > 0)
                },
                content:function() {
                    "step 0"
                    event.count = 1;
                    "step 1"
                    player.judge(function(card) {
                        return card.color == "red" ? 1 : -1
                    });
                    "step 2"
                    if (event.count < trigger.num) {
                        event.count++;
                        player.chooseBool(get.prompt2(event.name)).set('frequentSkill', event.name);
                    } else event.finish();
                    "step 3"
                    if (result.bool) {
                        player.logSkill(event.name);
                        event.goto(1);
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    result:{
                        effect:function(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (!target.hasFriend()) return;
                                var num = 1;
                                if (get.attitude(player, target) > 0) {
                                    if (player.needsToDiscard()) {
                                        num = 0.7;
                                    } else {
                                        num = 0.5;
                                    }
                                }
                                if (player.hp >= 4) return [1, num * 2];
                                if (target.hp == 3) return [1, num * 1.5];
                                if (target.hp == 2) return [1, num * 0.5];
                            }
                        },
                    },
                    threaten:0.6,
                },
            },
            yinzhaxiang:{
                trigger:{
                    player:"loseHpEnd",
                },
                forced:true,
                audio:"ext:阴间突破:2",
                content:function() {
        var num = trigger.num;
        player.draw(3*num)
        if (_status.currentPhase == player) {
            if (!player.storage.yinzhaxiang2) player.storage.yinzhaxiang2 = 0;
            player.storage.yinzhaxiang2 += num;
            if (player.storage.yinzhaxiang2-num==0){
                if (Math.max(2*num-3,0)!=0)  player.chooseToDiscard(true,'he',Math.max(2*num-3,0))
            }
            if (player.storage.yinzhaxiang2-num==1){
               if (Math.max(2*num-1,0)!=0)  player.chooseToDiscard(true,'he',Math.max(2*num-1,0)) 
            } 
            if (player.storage.yinzhaxiang2-num>1){
                player.chooseToDiscard(true,'he',2*num) 
            }
            player.addTempSkill('yinzhaxiang2', { player: 'phaseAfter' });
        } else {
            game.trySkillAudio('zhaxiang', player);
        }
    },
                ai:{
                    maihp:true,
                },
            },
            "yinzhaxiang2":{
                mod:{
                    targetInRange:function(card, player, target, now) {
            if (card.name == 'sha' && get.color(card) == 'red') return true;
        },
                },
                onremove:true,
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function(event, player) {
        return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
    },
                content:function() {
        trigger.directHit.addArray(game.players);
    },
                ai:{
                    "directHit_ai":true,
                    skillTagFilter:function(player, tag, arg) {
            return arg.card.name == 'sha' && get.color(arg.card) == 'red';
        },
                },
            },
            yinkurou:{
                audio:"ext:阴间突破:2",
                enable:"phaseUse",
                content:function() {
        "step 0"
        player.loseHp(1);
        if(!player.storage.yinkurou)player.storage.yinkurou=0
        "step 1"
        player.storage.yinkurou+=player.getStat().skill['yinkurou']
        player.addTempSkill('yinkurou2', { player: 'phaseAfter' });
    },
                ai:{
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function(player) {
                if (player.countCards('h') >= player.hp - 1) return -1;
                if (player.hp < 3) return -1;
                return 1;
            },
                    },
                },
            },
            yinzhiheng:{
                audio:"ext:阴间突破:2",
                audioname:["shen_caopi"],
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:function(card, player, event) {
                    event = event || _status.event;
                    if (typeof event != 'string') event = event.getParent().name;
                    var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                    if (mod != 'unchanged') return mod;
                    return true;
                },
                discard:false,
                lose:false,
                delay:false,
                selectCard:[1,Infinity],
                check:function(card) {
                    var player = _status.event.player;
                    if (get.position(card) == 'h' && !player.countCards('h', 'du') && (player.hp > 2 || !player.countCards('h', function(card) {
                            return get.value(card) >= 8;
                        }))) {
                        return 1;
                    }
                    return 6 - get.value(card)
                },
                content:function() {
                    'step 0'
                    player.discard(cards);
                    event.num = 1;
                    var hs = player.getCards('h');
                    if (!hs.length) event.num = 0;
                    for (var i = 0; i < hs.length; i++) {
                        if (!cards.contains(hs[i])) {
                            event.num = 0;
                            break;
                        }
                    }
                    'step 1'
                    player.draw(cards.length);
                    'step 2'
                    if (player.countCards('h') < player.getHandcardLimit()) {
                        player.drawTo(player.getHandcardLimit());
                    }
                    'step 3'
                    if (event.num) {
                        player.draw();
                    }
                },
                subSkill:{
                    draw:{
                        trigger:{
                            player:"loseEnd",
                        },
                        silent:true,
                        filter:function(event, player) {
                            if (event.getParent(2).skill != 'rezhiheng' && event.getParent(2).skill != 'jilue_zhiheng') return false;
                            if (player.countCards('h')) return false;
                            for (var i = 0; i < event.cards.length; i++) {
                                if (event.cards[i].original == 'h') return true;
                            }
                            return false;
                        },
                        content:function() {
                            player.addTempSkill('rezhiheng_delay', trigger.getParent(2).skill + 'After');
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    delay:{
                        sub:true,
                    },
                },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.55,
                },
            },
            yinquanshu:{
                audio:"ext:阴间突破:2",
                enable:"phaseUse",
                usable:1,
                mark:true,
                marktext:"权",
                intro:{
                    content:"当前有#个标记",
                },
                init:function(player) {
                    player.storage.yinquanshu = 0;
                },
                locked:true,
                filter:function(event, player) {
                    return player.countCards('he') > 1;
                },
                selectCard:2,
                position:"he",
                filterCard:true,
                content:function() {
                    player.draw();
                    player.addMark("yinquanshu");
                },
                mod:{
                    maxHandcard:function(player, num) {
                        return num + player.countMark("yinquanshu");
                    },
                },
            },
            yinqianxun:{
                init:function(player) {
                    if (!player.storage.reqianxun2) player.storage.reqianxun2 = [];
                },
                audio:"ext:阴间突破:2",
                trigger:{
                    target:"useCardToBegin",
                    player:"judgeBefore",
                },
                filter:function(event, player) {
                    if (player.countCards('h') == 0) return false;
                    if (event.parent.name == 'phaseJudge') {
                        if (lib.skill.reqianxun.trigger.player == 'judgeBefore') {
                            return true;
                        }
                        return event.result && event.result.judge != 0;
                    }
                    if (event.name == 'judge') return false;
                    if (event.card && get.type(event.card) != 'equip')
                        return true;
                },
                content:function() {
                    player.storage.reqianxun2 = player.storage.reqianxun2.concat(player.getCards('h'));
                    game.addVideo('storage', player, ['reqianxun2', get.cardsInfo(player.storage.reqianxun2), 'cards']);
                    player.lose(player.getCards('h'), ui.special, 'toStorage');
                    player.addSkill('yinqianxun2');
                },
                ai:{
                    effect:function(card, player, target) {
                        if (!target.hasFriend()) return;
                        if (player == target) return;
                        var type = get.type(card);
                        var nh = target.countCards();
                        if (type == 'trick') {
                            if (!get.tag(card, 'multitarget') || get.info(card).singleCard) {
                                if (get.tag(card, 'damage')) {
                                    if (nh < 3 || target.hp <= 2) return 0.8;
                                }
                                return [1, nh];
                            }
                        } else if (type == 'delay') {
                            return [0.5, 0.5];
                        }
                    },
                },
            },
            "yinliyu2":{
                audio:"liyu",
                trigger:{
                    source:"damageSource",
                },
                filter:function(event, player) {
                    if (event._notrigger.contains(event.player)) return false;
                    return event.card && event.card.name == 'juedou' && event.player != player && event.player.isAlive() && event.player.countGainableCards(player, 'hej') > 0;
                },
                direct:true,
                content:function() {
                    'step 0'
                    player.gainPlayerCard(get.prompt('new_liyu', trigger.player), trigger.player, 'hej', 'visibleMove').set('ai', function(card) {
                        var player = _status.event.player;
                        var evt = _status.event.target;
                        if (get.attitude(player, evt) > 0 && get.position(card) == 'j') return 4 + get.value(card);
                        if (get.type(card) == 'equip') {
                            if (get.attitude(player, evt) > 0 && game.hasPlayer(function(current) {
                                    return (player.canUse({ name: 'juedou' }, current) && current != evt.target && get.effect(current, { name: 'juedou' }, player, player) > 2);
                                })) {
                                return 5;
                            } else if (game.hasPlayer(function(current) {
                                    return (player.canUse({ name: 'juedou' }, current) && current != evt && current != player && get.effect(current, { name: 'juedou' }, player, player) < 0);
                                })) {
                                return 1;
                            } else return 4;
                        };
                        return 3;
                    }).set('logSkill', ['new_liyu', trigger.player]);
                    'step 1'
                    if (result.bool) {
                        if (get.type(result.cards[0]) != 'equip') {
                            trigger.player.draw(2);
                            event.finish();
                        } else {
                            trigger.player.draw();
                            if (!game.hasPlayer(function(current) {
                                    return current != player && current != trigger.player && player.canUse('juedou', current);
                                })) {
                                event.finish();
                                return;
                            }
                            trigger.player.chooseTarget(true, function(card, player, target) {
                                var evt = _status.event.getParent();
                                return evt.player.canUse({ name: 'juedou' }, target) && target != _status.event.player;
                            }, '请选择一名角色，视为' + get.translation(player) + '对其使用【决斗】').set('ai', function(target) {
                                var evt = _status.event.getParent();
                                return get.effect(target, { name: 'juedou' }, evt.player, _status.event.player) - 2;
                            });
                        }
                    } else event.finish();
                    'step 2'
                    if (result.targets) {
                        player.useCard({ name: 'juedou', isCard: true }, result.targets[0], 'noai');
                    }
                },
                ai:{
                    halfneg:true,
                },
            },
            yinliyu:{
                audio:"ext:阴间突破:2",
                group:["yinliyu2"],
                trigger:{
                    source:"damageSource",
                },
                filter:function(event, player) {
                    if (event._notrigger.contains(event.player)) return false;
                    return event.card && event.card.name == 'sha' && event.player != player && event.player.isAlive() && event.player.countGainableCards(player, 'hej') > 0;
                },
                direct:true,
                content:function() {
                    'step 0'
                    player.gainPlayerCard(get.prompt('new_liyu', trigger.player), trigger.player, 'hej', 'visibleMove').set('ai', function(card) {
                        var player = _status.event.player;
                        var evt = _status.event.target;
                        if (get.attitude(player, evt) > 0 && get.position(card) == 'j') return 4 + get.value(card);
                        if (get.type(card) == 'equip') {
                            if (get.attitude(player, evt) > 0 && game.hasPlayer(function(current) {
                                    return (player.canUse({ name: 'juedou' }, current) && current != evt.target && get.effect(current, { name: 'juedou' }, player, player) > 2);
                                })) {
                                return 5;
                            } else if (game.hasPlayer(function(current) {
                                    return (player.canUse({ name: 'juedou' }, current) && current != evt && current != player && get.effect(current, { name: 'juedou' }, player, player) < 0);
                                })) {
                                return 1;
                            } else return 4;
                        };
                        return 3;
                    }).set('logSkill', ['new_liyu', trigger.player]);
                    'step 1'
                    if (result.bool) {
                        if (get.type(result.cards[0]) != 'equip') {
                            trigger.player.draw();
                            event.finish();
                        } else {
                            if (!game.hasPlayer(function(current) {
                                    return current != player && current != trigger.player && player.canUse('juedou', current);
                                })) {
                                event.finish();
                                return;
                            }
                            trigger.player.chooseTarget(true, function(card, player, target) {
                                var evt = _status.event.getParent();
                                return evt.player.canUse({ name: 'juedou' }, target) && target != _status.event.player;
                            }, '请选择一名角色，视为' + get.translation(player) + '对其使用【决斗】').set('ai', function(target) {
                                var evt = _status.event.getParent();
                                return get.effect(target, { name: 'juedou' }, evt.player, _status.event.player) - 2;
                            });
                        }
                    } else event.finish();
                    'step 2'
                    if (result.targets) {
                        player.useCard({ name: 'juedou', isCard: true }, result.targets[0], 'noai');
                    }
                },
                ai:{
                    halfneg:true,
                },
            },
            "yinjiuzhu2":{
                audio:"jiuyuan",
                forceaudio:true,
                trigger:{
                    player:"useCardToPlayer",
                },
                filter:function(event, player) {
                    if (event.card.name != 'tao') return false;
                    if (player.group != 'wu') return false;
                    if (event.target != player) return false;
                    return game.hasPlayer(function(target) {
                        return player != target && !event.targets.contains(target) && target.isDamaged() && target.hp < player.hp && target.hasZhuSkill('救助', player);
                    });
                },
                direct:true,
                content:function() {
                    'step 0'
                    player.chooseTarget(get.prompt2('救助'), function(card, player, target) {
                        return player != target && !_status.event.targets.contains(target) && target.isDamaged() && target.hp < player.hp && target.hasZhuSkill('救助', player);
                    }).set('ai', function(target) {
                        return get.attitude(_status.event.player, target);
                    }).set('targets', trigger.targets);
                    'step 1'
                    if (result.bool) {
                        player.line('救助2', target, 'green');
                        trigger.getParent().targets.remove(player);
                        trigger.getParent().targets.push(target);
                        player.draw();
                    }
                },
            },
            yinjiuzhu:{
                global:"救助2",
                audio:"ext:阴间突破:2",
                zhuSkill:true,
            },
            yinjiuyuan:{
                audio:"ext:阴间突破:2",
                unique:true,
                trigger:{
                    target:"taoBegin",
                },
                zhuSkill:true,
                forced:true,
                filter:function(event, player) {
                    if (event.player == player) return false;
                    if (!player.hasZhuSkill('救援')) return false;
                    if (event.player.group != 'wu') return false;
                    return true;
                },
                content:function() {
                    trigger.target.draw(2);
                },
            },
            yinguishu:{
                locked:false,
                audio:"ext:阴间突破:2",
                enable:"phaseUse",
                discard:false,
                filter:function(event, player) {
                    if (player.hasJudge('bingliang')) return false;
                    return player.countCards('hes', { suit: 'club' }) > 0;
                },
                viewAs:{
                    name:"bingliang",
                },
                position:"hes",
                filterCard:function(card, player, event) {
                    return get.suit(card) == 'club' && player.canAddJudge({ name: 'bingliang', cards: [card] });
                },
                selectTarget:-1,
                filterTarget:function(card, player, target) {
                    return player == target;
                },
                check:function(card) {
                    var player = _status.event.player;
                    if (!player.getEquip('zhangba') && player.countCards('hs', 'sha') < 2) {
                        if (player.countCards('h', function(cardx) {
                                return cardx != card && cardx.name == 'shan';
                            }) > 0) return 0;
                        var damaged = player.maxHp - player.hp - 1;
                        var ts = player.countCards('h', function(cardx) {
                            return cardx != card && cardx.name == 'tao';
                        });
                        if (ts > 0 && ts > damaged) return 0;
                    }
                    if (card.name == 'shan') return 15;
                    if (card.name == 'tao') return 10;
                    return 9 - get.value(card);
                },
                onuse:function(links, player) {
                    var next = game.createEvent('limu_recover', false, _status.event.getParent());
                    next.player = player;
                    next.setContent(function() { player.draw() });
                },
                ai:{
                    result:{
                        target:1,
                    },
                    order:12,
                    basic:{
                        order:1,
                        useful:1,
                        value:8,
                    },
                    tag:{
                        skip:"phaseUse",
                    },
                },
            },
            yinguidao:{
                audio:"ext:阴间突破:2",
                trigger:{
                    global:"judge",
                },
                filter:function(event, player) {
        return player.countCards('hes', { color: 'black' }) > 0;
    },
                direct:true,
                content:function() {
        "step 0"
        player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
            get.translation(trigger.player.judging[0]) + '，' + get.prompt('yinguidao'), 'hes',
            function(card) {
                if (get.color(card) != 'black') return false;
                var player = _status.event.player;
                var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                if (mod2 != 'unchanged') return mod2;
                var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                if (mod != 'unchanged') return mod;
                return true;
            }).set('ai', function(card) {
            var trigger = _status.event.getTrigger();
            var player = _status.event.player;
            var judging = _status.event.judging;
            var result = trigger.judge(card) - trigger.judge(judging);
            var attitude = get.attitude(player, trigger.player);
            if (attitude == 0 || result == 0) {
                if (trigger.player != player) return 0;
                if (game.hasPlayer(function(current) {
                        return get.attitude(player, current) < 0;
                    })) {
                    var checkx = lib.skill.xinleiji.judgeCheck(card, true) - lib.skill.xinleiji.judgeCheck(judging);
                    if (checkx > 0) return checkx;
                }
                return 0;
            };
            if (attitude > 0) {
                return result;
            } else {
                return -result;
            }
        }).set('judging', trigger.player.judging[0]);
        "step 1"
        if (result.bool) {
            player.respond(result.cards, 'highlight', 'yinguidao', 'noOrdering');
        } else {
            event.finish();
        }
        "step 2"
        if (result.bool) {
            player.$gain2(trigger.player.judging[0]);
            player.gain(trigger.player.judging[0]);
            var card = result.cards[0];
            if (get.suit(result.cards[0]) == 'spade') player.draw('nodelay');
            trigger.player.judging[0] = result.cards[0];
            trigger.orderingCards.addArray(result.cards);
            game.log(trigger.player, '的判定牌改为', result.cards[0]);
        }
        "step 3"
        game.delay(2);
    },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
            },
            yintieji:{
                shaRelated:true,
                audio:"ext:阴间突破:2",
                group:["yintieji2"],
                init:function (player){
        player.storage.yintieji=0;
    },
                trigger:{
                    player:"useCardToPlayered",
                },
                check:function(event, player) {
        return get.attitude(player, event.target) <= 0;
    },
                filter:function(event, player) {
        return event.card.name == 'sha';
    },
                logTarget:"target",
                content:function() {
        "step 0"
        player.judge(function() { return 0 });
        if (!trigger.target.hasSkill('fengyin')) {
            trigger.target.addTempSkill('fengyin');
        }
        "step 1"
        if (result.color == "red") {
            player.storage.yintieji+=2;
        } else {
            var id=trigger.target.playerid;
            var map=trigger.getParent().customArgs;
            if(!map[id]) map[id]={};
            if(typeof map[id].extraDamage!='number'){
                map[id].extraDamage=0;
            }
            map[id].extraDamage++;
        }
        "step 2"
        var suit = result.suit;
        var target = trigger.target;
        var num = target.countCards('h', 'shan');
        target.chooseToDiscard('请弃置一张' + get.translation(suit) + '牌，否则不能使用闪抵消此杀', 'he', function(card) {
            return get.suit(card) == _status.event.suit;
        }).set('ai', function(card) {
            var num = _status.event.num;
            if (num == 0) return 0;
            if (card.name == 'shan') return num > 1 ? 2 : 0;
            return 8 - get.value(card);
        }).set('num', num).set('suit', suit);
        "step 3"
        if (!result.bool) {
            trigger.getParent().directHit.add(trigger.target);
        }
    },
                ai:{
                    ignoreSkill:true,
                    skillTagFilter:function(player, tag, arg) {
            if (tag == 'directHit_ai') {
                return get.attitude(player, arg.target) <= 0;
            }
            if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
            if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
            if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).contains(arg.skill)) return false;
        },
                    "directHit_ai":true,
                },
            },
            yinmashu:{
                mod:{
                    globalFrom:function(from, to, distance) {
                        return distance - from.hp;
                    },
                },
            },
            yinliyong:{
                shaRelated:true,
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"shaMiss",
                },
                frequent:true,
                content:function() {
                    player.draw();
                },
            },
            yinlianhuo:{
                audio:"ext:阴间突破:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event, player) {
        return player.countCards('he', { suit: "club" });
    },
                filterCard:function(card) {
        return get.suit(card) == 'club';
    },
                position:"he",
                selectCard:1,
                filterTarget:function(card, player, target) {
        return true;
    },
                selectTarget:1,
                prompt:"选择受到一点火焰伤害的角色",
                content:function() {
        'step 0'
        game.countPlayer(function(current) {
            if(current.isLinked()){
                current.loseHp()
            }
            else
            current.link();
        });
        'step 1'
        target.damage(1, "fire");
    },
            },
            yinniepan:{
                audio:"ext:阴间突破:2",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:true,
                animationStr:"涅槃",
                limited:true,
                animationColor:"orange",
                init:function(player) {
        player.storage.olniepan = false;
    },
                filter:function(event, player) {
        if (player.storage.olniepan) return false;
        if (event.type == 'dying') {
            if (player != event.dying) return false;
            return true;
        }
        return false;
    },
                content:function() {
        'step 0'
        player.awakenSkill('olniepan');
        player.storage.olniepan = true;
        player.discard(player.getCards('hej'));
        'step 1'
        player.link(false);
        'step 2'
        player.turnOver(false);
        'step 3'
        player.draw(3);
        'step 4'
        player.gainMaxHp();
        if (player.hp < player.maxHp) {
            player.recover(player.maxHp - player.hp);
        }
        'step 5'
        player.chooseControl('bazhen', 'rehuoji', 'rekanpo').set('prompt', '选择获得一个技能').ai = function() {
            return ['rehuoji', 'bazhen'].randomGet();
        };
        'step 6'
        player.addSkillLog(result.control);
    },
                ai:{
                    order:1,
                    skillTagFilter:function(player, tag, target) {
            if (player != target || player.storage.olniepan) return false;
        },
                    save:true,
                    result:{
                        player:function(player) {
                if (player.hp <= 0) return 10;
                if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                return 0;
            },
                    },
                    threaten:function(player, target) {
            if (!target.storage.olniepan) return 0.6;
        },
                },
                intro:{
                    content:"limited",
                },
            },
            yinfanjian:{
                audio:"ext:阴间突破:2",
                enable:"phaseUse",
                filter:function(event, player) {
        if (player.countCards('h') <= 0 || player.getStat().skill["yinfanjian"] >= Math.max(player.maxHp - player.hp, 1)) {
            return false;
        }
        return true;
    },
                filterTarget:function(card, player, target) {
        return player != target;
    },
                filterCard:true,
                check:function(card) {
        return 8 - get.value(card);
    },
                discard:false,
                lose:false,
                delay:false,
                content:function() {
        "step 0"
        target.storage.refanjian = cards[0];
        target.gain(cards[0], player, 'give');
        "step 1"
        target.chooseControl('refanjian_card', 'refanjian_hp').ai = function(event, player) {
            var cards = player.getCards('he', { suit: get.suit(player.storage.refanjian) });
            if (cards.length == 1) return 0;
            if (cards.length >= 2) {
                for (var i = 0; i < cards.length; i++) {
                    if (get.tag(cards[i], 'save')) return 1;
                }
            }
            if (player.hp == 1) return 0;
            for (var i = 0; i < cards.length; i++) {
                if (get.value(cards[i]) >= 8) return 1;
            }
            if (cards.length > 2 && player.hp > 2) return 1;
            if (cards.length > 3) return 1;
            return 0;
        }
        "step 2"
        if (result.control == 'refanjian_card') {
            target.showHandcards();
        } else {
            target.loseHp();
            event.finish();
        }
        "step 3"
        target.discard(target.getCards('he', { suit: get.suit(target.storage.refanjian) }))
        delete target.storage.refanjian;
    },
                ai:{
                    order:9,
                    result:{
                        target:function(player, target) {
                return -target.countCards('he') - (player.countCards('h', 'du') ? 1 : 0);
            },
                    },
                    threaten:2,
                },
            },
            yinyingzi:{
                audio:"ext:阴间突破:2",
                audioname:["yin_sunce2"],
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                filter:function(event, player) {
                    return !event.numFixed;
                },
                content:function() {
                    trigger.num += Math.max(player.maxHp - player.hp, 1);
                },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcardBase:function(player, num) {
                        return player.maxHp;
                    },
                },
            },
            yinganglie:{
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event, player) {
                    return (event.source != undefined && event.num > 0);
                },
                check:function(event, player) {
                    return (get.attitude(player, event.source) <= 0);
                },
                logTarget:"source",
                content:function() {
                    "step 0"
                    event.num = trigger.num;
                    "step 1"
                    player.judge(function(card) {
                        if (get.color(card) == 'red') return 1;
                        return 0;
                    });
                    "step 2"
                    if (result.color == 'black') {
                        if (trigger.source.countCards('he')) {
                            player.discardPlayerCard(trigger.source, 'he', true, Math.min(Math.max(player.maxHp - player.hp, 1), trigger.source.countCards('he')));
                        }
                    } else {

                        if (trigger.source.isIn()) {
                            trigger.source.damage();
                        }
                        player.draw();
                    }
                    event.num--;
                    if (event.num > 0) {
                        player.chooseBool(get.prompt2('reganglie'));
                    } else {
                        event.finish();
                    }
                    "step 3"
                    if (result.bool) {
                        player.logSkill('reganglie', trigger.source);
                        event.goto(1);
                    }
                },
                ai:{
                    "maixie_defend":true,
                    expose:0.4,
                },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            yinleiji:{
                group:"yinleiji2",
                audio:"ext:阴间突破:2",
                derivation:"xinleiji_faq",
                audioname:["boss_qinglong"],
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function(event, player) {
                    return event.card.name == 'shan' || event.name == 'useCard' && event.card.name == 'shandian';
                },
                judgeCheck:function(card, bool) {
                    var suit = get.suit(card);
                    if (suit == 'spade') {
                        if (bool && card.number > 1 && card.number < 10) return 5;
                        return 4;
                    }
                    if (suit == 'club') return 2;
                    return 0;
                },
                content:function() {
                    player.judge(lib.skill.xinleiji.judgeCheck);
                },
                ai:{
                    useShan:true,
                    effect:{
                        target:function(card, player, target, current) {
                            if (get.tag(card, 'respondShan') && !player.hasSkillTag('directHit_ai', true, {
                                    target: target,
                                    card: card,
                                }, true)) {
                                var hastarget = game.hasPlayer(function(current) {
                                    return get.attitude(target, current) < 0;
                                });
                                var be = target.countCards('e', { color: 'black' });
                                if (target.countCards('h', 'shan') && be) {
                                    if (!target.hasSkill('xinguidao')) return 0;
                                    return [0, hastarget ? target.countCards('he') / 2 : 0];
                                }
                                if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                    if (!target.hasSkill('xinguidao')) return 0;
                                    return [0, hastarget ? target.countCards('h') / 4 : 0];
                                }
                                if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                    return [0, 0];
                                }
                                if (target.countCards('h') == 0) {
                                    return [1.5, 0];
                                }
                                if (target.countCards('h') == 1 && !be) {
                                    return [1.2, 0];
                                }
                                if (!target.hasSkill('xinguidao')) return [1, 0.05];
                                return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                            }
                        },
                    },
                },
            },
            yinpaoxiao:{
                mod:{
                    cardUsable:function(card, player, num) {
            if (card.name == 'sha') return Infinity;
        },
                    selectTarget:function(card, player, range) {
            if (card.name == 'sha') range[1] += player.getStat().card['sha'];
        },
                    globalFrom:function() {
            return -Infinity;
        },
                },
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"useCard1",
                },
                forced:true,
                filter:function(event,player){
        return !event.audioed&&event.card.name=='sha'&&player.countUsed('sha',true)>1&&event.getParent().type=='phase';
    },
                content:function(){
        trigger.audioed=true;
    },
                ai:{
                    unequip:true,
                    skillTagFilter:function(player, tag, arg) {
            if (!get.zhu(player, 'shouyue')) return false;
            if (arg && arg.name == 'sha') return true;
            return false;
        },
                },
            },
            yinlianying:{
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"loseAfter",
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                },
                direct:true,
                filter:function(event, player) {
                    if (player.countCards('h')) return false;
                    var evt = event.getl(player);
                    return evt && evt.hs && evt.hs.length;
                },
                content:function() {
                    "step 0"
                    var num = trigger.getl(player).hs.length;
                    player.chooseTarget(get.prompt('relianying'), '令至多' + get.cnNumber(num) + '名角色各摸一张牌', [1, num]).ai = function(target) {
                        var player = _status.event.player;
                        if (player == target) return get.attitude(player, target) + 10;
                        return get.attitude(player, target);
                    }
                    "step 1"
                    if (result.bool) {
                        player.logSkill('yinlianying', result.targets);
                        game.asyncDraw(result.targets);
                    } else event.finish();
                    "step 2"
                    game.delay();
                },
                ai:{
                    threaten:0.8,
                    effect:{
                        target:function(card) {
                            if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                        },
                    },
                    noh:true,
                },
            },
            yintiandu:{
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"judgeEnd",
                },
                frequent:function(event) {
        if (event.result.card.name == 'du') return false;
        //if(get.mode()=='guozhan') return false;
        return true;
    },
                check:function(event) {
        if (event.result.card.name == 'du') return false;
        return true;
    },
                filter:function(event, player) {
        return get.position(event.result.card, true) == 'o';
    },
                content:function() {
        'step 0'
        event.color = get.color(trigger.result.card);
        player.gain(trigger.result.card, 'gain2');
        'step 1'
        if (event.color == 'red') {
            player.draw(2);
        }
        if (event.color == 'black') {
            player.draw();
            player.chooseTarget('请选择一名角色弃置其一张牌', true, function(card, player, target) {
                return target.countCards('hej');
            }).set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target);
                if(att<0){
                    att=-Math.sqrt(-att);
                }
                else{
                    att=Math.sqrt(att);
                }
                return att*lib.card.guohe.ai.result.target(player,target);
            })
        }
        'step 2'
        if (event.color == 'black' && result.targets.length) {
            player.discardPlayerCard(result.targets[0], 'hej', true)
        }
        'step 3'
        event.given = 0;
        'step 4'
        player.chooseCardTarget({
            filterCard: true,
            selectCard: 1,
            filterTarget: function(card, player, target) {
                return target != player;
            },
            ai1: function(card) {
                if (ui.selected.cards.length > 0) return -1;
                if (card.name == 'du') return 20;
                return (_status.event.player.countCards('h') - _status.event.player.hp);
            },
            ai2: function(target) {
                var att = get.attitude(_status.event.player, target);
                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                    if (target.hasSkillTag('nodu')) return 0;
                    return 1 - att;
                }
                return att - 4;
            },
            prompt: '请选择要送人的卡牌'
        });
        'step 5'
        if (result.bool) {
            player.$give(result.cards.length, result.targets[0]);
            result.targets[0].gain(result.cards, player);
        }
        event.given++;
        if (event.given < 2) {
            event.goto(4)
        } else {
            delete event.given;
        }
    },
            },
            yinfankui:{
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function(event, player) {
        return (event.source && event.source.countGainableCards(player, 'he') && event.num > 0);
    },
                content:function() {
        "step 0"
        event.count = trigger.num;
        "step 1"
        event.count--;
        game.asyncDraw([trigger.source]);
        player.gainPlayerCard(get.prompt('refankui', trigger.source), trigger.source, get.buttonValue, 'he').set('logSkill', ['yinfankui', trigger.source]);
        player.gainPlayerCard(get.prompt('refankui', trigger.source), trigger.source, get.buttonValue, 'he')
        "step 2"
        if (result.bool && event.count > 0 && trigger.source.countGainableCards(player, 'he') > 0) event.goto(1);
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function(card, player, target) {
                if (player.countCards('he') > 1 && get.tag(card, 'damage')) {
                    if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                    if (get.attitude(target, player) < 0) return [1, 1];
                }
            },
                    },
                },
            },
            yinguicai:{
                audio:"ext:阴间突破:2",
                trigger:{
                    global:"judge",
                },
                filter:function(event, player) {
                    return player.countCards('hes') > 0;
                },
                direct:true,
                content:function() {
                    "step 0"
                    player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
                        get.translation(trigger.player.judging[0]) + '，' + get.prompt('guidao'), 'hes',
                        function(card) {
                            var player = _status.event.player;
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        }).set('ai', function(card) {
                        var trigger = _status.event.getTrigger();
                        var player = _status.event.player;
                        var judging = _status.event.judging;
                        var result = trigger.judge(card) - trigger.judge(judging);
                        var attitude = get.attitude(player, trigger.player);
                        if (attitude == 0 || result == 0) return 0;
                        if (attitude > 0) {
                            return result;
                        } else {
                            return -result;
                        }
                    }).set('judging', trigger.player.judging[0]);
                    "step 1"
                    if (result.bool) {
                        player.respond(result.cards, 'highlight', 'yinguicai', 'noOrdering');
                    } else {
                        event.finish();
                    }
                    "step 2"
                    if (result.bool) {
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        trigger.player.judging[0] = result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player, '的判定牌改为', result.cards[0]);
                    }
                    "step 3"
                    game.delay(2);
                },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
            },
            yinyinghun:{
                audio:"ext:阴间突破:2",
                audioname:["ext:阴间突破:yin_sunce2"],
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event, player) {
                    return player.getDamagedHp() > 0;
                },
                direct:true,
                content:function() {
                    "step 0"
                    player.chooseTarget(get.prompt2('gzyinghun'), function(card, player, target) {
                        return player != target;
                    }).set('ai', function(target) {
                        var player = _status.event.player;
                        if (player.getDamagedHp() == 1 && target.countCards('he') == 0) {
                            return 0;
                        }
                        if (get.attitude(_status.event.player, target) > 0) {
                            return 10 + get.attitude(_status.event.player, target);
                        }
                        if (player.getDamagedHp() == 1) {
                            return -1;
                        }
                        return 1;
                    });
                    "step 1"
                    if (result.bool) {
                        event.num = player.getDamagedHp();
                        player.logSkill(event.name, result.targets);
                        event.target = result.targets[0];
                        var str1 = '摸' + get.cnNumber(event.num, true) + '给一';
                        var str2 = '给一弃' + get.cnNumber(event.num, true) + "拿一";
                        player.chooseControl(str1, str2, function(event, player) {
                            return _status.event.choice;
                        }).set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                        event.str = str1;
                    } else {
                        event.finish();
                    }
                    "step 2"
                    if (event.directcontrol || result.control == event.str) {
                        event.target.draw(event.num);
                        event.target.chooseCard('he', true, "请选择给与的牌");
                        event.switch = 1;
                    } else {
                        player.draw();
                        event.player.chooseCard('he', true, "请选择给与的牌");
                        event.switch = 2;

                    }
                    "step 3"
                    if (event.switch == 1) {
                        event.target.give(result.cards, player, true);
                    }
                    if (event.switch == 2) {
                        player.$give(result.cards.length, event.target);
                        event.target.gain(result.cards, player);
                        event.target.chooseToDiscard(event.num, true, 'he');
                    }
                    "step 4"
                    if (event.switch == 2 && result.bool && result.cards && result.cards.length) {
                        if (result.cards.length == 1) {
                            event._result = { bool: true, links: result.cards.slice(0) };
                        } else player.chooseButton(['选择获得其中的一张牌', result.cards.slice(0)], true).ai = function(button) {
                            return get.value(button.link);
                        };
                    }
                    "step 5"
                    if (event.switch == 2 && result.links) player.gain(result.links, 'gain2');
                },
                ai:{
                    threaten:function(player, target) {
                        if (target.hp == target.maxHp) return 0.5;
                        if (target.hp == 1) return 2;
                        if (target.hp == 2) return 1.5;
                        return 0.5;
                    },
                    maixie:true,
                },
            },
            "yinleiji2":{
                audio:"yinleiji",
                trigger:{
                    player:"judgeAfter",
                },
                direct:true,
                disableReason:["暴虐","助祭","弘仪","孤影"],
                filter:function(event, player) {
                    return !lib.skill.xinleiji_misa.disableReason.contains(event.judgestr) && ['spade', 'club'].contains(event.result.suit);
                },
                content:function() {
                    'step 0'
                    event.num = 1 + ['club', 0, 'spade'].indexOf(trigger.result.suit);
                    event.logged = false;
                    if (event.num == 1) {
                        event.logged = true;
                        player.logSkill('xinleiji');
                        player.draw();
                        if (player.isDamaged()) {
                            player.recover();
                        }
                    }
                    player.chooseTarget('雷击：是否对一名角色造成' + event.num + '点雷电伤害？', lib.filter.notMe).ai = function(target) {
                        var player = _status.event.player;
                        return get.damageEffect(target, player, player, 'thunder');
                    };
                    'step 1'
                    if (result.bool && result.targets && result.targets.length) {
                        if (!event.logged) player.logSkill('xinleiji', result.targets);
                        else player.line(result.targets, 'thunder');
                        result.targets[0].damage(event.num, 'thunder');
                    }
                },
            },
            yinwulie:{
                trigger:{
                    player:["phaseJieshuBegin"],
                },
                audio:"ext:阴间突破:2",
                filter:function(event, player) {
                    return player.getDamagedHp() > 1;
                },
                content:function() {
                    'step 0'
                    player.draw(parseInt(player.getDamagedHp() / 2))
                },
            },
            yinzhiba:{
                audio:"ext:阴间突破:2",
                unique:true,
                zhuSkill:true,
                global:"olzhiba2",
            },
            yinhunzi:{
                audio:"ext:阴间突破:2",
                content:function() {
                    "step 0"
                    player.awakenSkill("yinhunzi");
                    "step 1"
                    player.draw(2);
                    player.awakenSkill('rejiang');
                    player.awakenSkill('yinyingzi2');
                    player.awakenSkill('yinyinghun2');
                    game.log(player, '失去了技能', '#g【界激昂】', '、', '#g【界英姿】', '和', '#g【界英魂】');
                    player.addSkill('yinjiang');
                    player.addSkill('yinscyingzi');
                    player.addSkill('yinscyinghun');
                    player.addSkill('bgmbegin');
                    player.addSkill('yinjiang');
                    player.addSkill('bgmend');
                    game.log(player, '获得了技能', '#g【阴激昂】', '、', '#g【阴英姿】', '和', '#g【阴英魂】');
                    player.storage.src = ui.backgroundMusic.src
                    if (ui.backgroundMusic) ui.backgroundMusic.src = "extension/阴间突破/Patriot.mp3";
                },
                skillAnimation:true,
                animationColor:"wood",
                derivation:["yinyingzi","yinyinghun"],
                unique:true,
                limited:true,
                forced:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event, player) {
                    return player.hp <= 1;
                },
                intro:{
                    content:"limited",
                },
                init:function(player, skill) {
                    if (!player.storage[skill]) player.storage[skill] = false;
                },
                ai:{
                    threaten:function(player, target) {
                        if (target.hp == 1) return 2;
                        return 0.5;
                    },
                    maixie:true,
                    effect:{
                        target:function(card, player, target) {
                            if (!target.hasFriend()) return;
                            if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() &&
                                _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                        },
                    },
                },
                mark:true,
            },
            yinpingdong:{
                audio:"ext:阴间突破:2",
                content:function() {
                    "step 0"
                    player.awakenSkill("yinpingdong");
                    player.awakenSkill('ojiang');
                    "step 1"
                    player.loseMaxHp();
                    player.addSkill('rejiang');
                    player.addSkill('yinyingzi2');
                    player.addSkill('yinyinghun2');
                    player.addSkill('yinhunzi');
                    game.log(player, '失去了技能', '#g【激昂】');
                    game.log(player, '获得了技能', '#g【界英姿】', '、', '#g【界英魂】', '和', '#g【界激昂】');
                },
                skillAnimation:true,
                animationColor:"wood",
                derivation:["reyingzi","gzyinghun","yinhunzi","yinscyingzi","yinscyinghun"],
                unique:true,
                intro:{
                    content:"limited",
                },
                init:function(player, skill) {
                    if (!player.storage[skill]) player.storage[skill] = false;
                },
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event, player) {
                    return player.hp <= game.roundNumber;
                },
                forced:true,
                ai:{
                    threaten:function(player, target) {
                        if (target.hp == 1) return 2;
                        return 0.5;
                    },
                    maixie:true,
                    effect:{
                        target:function(card, player, target) {
                            if (!target.hasFriend()) return;
                            if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() &&
                                _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                        },
                    },
                },
            },
            "yinyinghun2":{
                audio:"ext:阴间突破:2",
                audioname:["re_sunjian","sunce","re_sunben","re_sunce","ol_sunjian"],
                trigger:{
                    player:"phaseZhunbei",
                },
                filter:function(event, player) {
                    return player.getDamagedHp() > 0;
                },
                direct:true,
                content:function() {
                    "step 0"
                    player.chooseTarget(get.prompt2('gzyinghun'), function(card, player, target) {
                        return player != target;
                    }).set('ai', function(target) {
                        var player = _status.event.player;
                        if (player.getDamagedHp() == 1 && target.countCards('he') == 0) {
                            return 0;
                        }
                        if (get.attitude(_status.event.player, target) > 0) {
                            return 10 + get.attitude(_status.event.player, target);
                        }
                        if (player.getDamagedHp() == 1) {
                            return -1;
                        }
                        return 1;
                    });
                    "step 1"
                    if (result.bool) {
                        event.num = player.getDamagedHp();
                        player.logSkill(event.name, result.targets);
                        event.target = result.targets[0];
                        if (event.num == 1) {
                            event.directcontrol = true;
                        } else {
                            var str1 = '摸' + get.cnNumber(event.num, true) + '弃一';
                            var str2 = '摸一弃' + get.cnNumber(event.num, true);
                            player.chooseControl(str1, str2, function(event, player) {
                                return _status.event.choice;
                            }).set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                            event.str = str1;
                        }
                    } else {
                        event.finish();
                    }
                    "step 2"
                    if (event.directcontrol || result.control == event.str) {
                        event.target.draw(event.num);
                        event.target.chooseToDiscard(true, 'he');
                    } else {
                        event.target.draw();
                        event.target.chooseToDiscard(event.num, true, 'he');
                    }
                },
                ai:{
                    threaten:function(player, target) {
                        if (target.hp == target.maxHp) return 0.5;
                        if (target.hp == 1) return 2;
                        if (target.hp == 2) return 1.5;
                        return 0.5;
                    },
                    maixie:true,
                },
            },
            "yinyingzi2":{
                audio:"ext:阴间突破:2",
                audioname:["heqi","sunce","gexuan","re_sunben","re_sunce","re_heqi"],
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                filter:function(event, player) {
                    return !event.numFixed;
                },
                content:function() {
                    trigger.num++;
                },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcardBase:function(player, num) {
                        return player.maxHp;
                    },
                },
            },
            yinscyingzi:{
                audio:"ext:阴间突破:2",
                inherit:"yinyingzi",
                audioname:["yin_sunce2"],
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                filter:function(event, player) {
                    return !event.numFixed;
                },
                content:function() {
                    trigger.num += Math.max(player.maxHp - player.hp, 1);
                },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcardBase:function(player, num) {
                        return player.maxHp;
                    },
                },
            },
            yinscyinghun:{
                inherit:"yinyinghun",
                radio:2,
                trigger:{
                    player:"phaseZhunbei",
                },
                audio:"ext:阴间突破:2",
                audioname:["ext:阴间突破:yin_sunce2"],
                filter:function(event, player) {
                    return player.getDamagedHp() > 0;
                },
                direct:true,
                content:function() {
                    "step 0"
                    player.chooseTarget(get.prompt2('gzyinghun'), function(card, player, target) {
                        return player != target;
                    }).set('ai', function(target) {
                        var player = _status.event.player;
                        if (player.getDamagedHp() == 1 && target.countCards('he') == 0) {
                            return 0;
                        }
                        if (get.attitude(_status.event.player, target) > 0) {
                            return 10 + get.attitude(_status.event.player, target);
                        }
                        if (player.getDamagedHp() == 1) {
                            return -1;
                        }
                        return 1;
                    });
                    "step 1"
                    if (result.bool) {
                        event.num = player.getDamagedHp();
                        player.logSkill(event.name, result.targets);
                        event.target = result.targets[0];
                        var str1 = '摸' + get.cnNumber(event.num, true) + '给一';
                        var str2 = '给一弃' + get.cnNumber(event.num, true) + "拿一";
                        player.chooseControl(str1, str2, function(event, player) {
                            return _status.event.choice;
                        }).set('choice', get.attitude(player, event.target) > 0 ? str1 : str2);
                        event.str = str1;
                    } else {
                        event.finish();
                    }
                    "step 2"
                    if (event.directcontrol || result.control == event.str) {
                        event.target.draw(event.num);
                        event.target.chooseCard('he', true, "请选择给与的牌");
                        event.switch = 1;
                    } else {
                        player.draw();
                        event.player.chooseCard('he', true, "请选择给与的牌");
                        event.switch = 2;

                    }
                    "step 3"
                    if (event.switch == 1) {
                        event.target.give(result.cards, player, true);
                    }
                    if (event.switch == 2) {
                        player.$give(result.cards.length, event.target);
                        event.target.gain(result.cards, player);
                        event.target.chooseToDiscard(event.num, true, 'he');
                    }
                    "step 4"
                    if (event.switch == 2 && result.bool && result.cards && result.cards.length) {
                        if (result.cards.length == 1) {
                            event._result = { bool: true, links: result.cards.slice(0) };
                        } else player.chooseButton(['选择获得其中的一张牌', result.cards.slice(0)], true).ai = function(button) {
                            return get.value(button.link);
                        };
                    }
                    "step 5"
                    if (event.switch == 2 && result.links) player.gain(result.links, 'gain2');
                },
                ai:{
                    threaten:function(player, target) {
                        if (target.hp == target.maxHp) return 0.5;
                        if (target.hp == 1) return 2;
                        if (target.hp == 2) return 1.5;
                        return 0.5;
                    },
                    maixie:true,
                },
            },
            bgmbegin:{
                trigger:{
                    player:["phaseBegin"],
                },
                direct:true,
                content:function() {
                    if (ui.backgroundMusic) ui.backgroundMusic.pause();
                    if (lib.config.background_audio) {
                        game.playAudio('..', 'extension', '阴间突破', "Patriot");
                    }
                },
            },
            bgmend:{
                trigger:{
                    player:["phaseEnd"],
                },
                direct:true,
                content:function() {
                    if (ui.backgroundMusic) ui.backgroundMusic.src = player.storage.src;
                },
            },
            ojiang:{
                shaRelated:true,
                audio:"ext:阴间突破:2",
                derivation:["rejiang","yinjiang"],
                trigger:{
                    player:"useCardToPlayered",
                    target:"useCardToTargeted",
                },
                filter:function(event, player) {
                    if (!(event.card.name == 'juedou' || (event.card.name == 'sha' && get.color(event.card) == 'red'))) return false;
                    return player == event.target || event.getParent().triggeredTargets3.length == 1;
                },
                frequent:true,
                content:function() {
                    player.draw();
                },
                ai:{
                    effect:{
                        target:function(card, player, target) {
                            if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                        },
                        player:function(card, player, target) {
                            if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                        },
                    },
                },
            },
            yinjiang:{
                shaRelated:true,
                audio:"ext:阴间突破:2",
                group:"yinjiang2",
                trigger:{
                    player:"useCardToPlayered",
                    target:"useCardToTargeted",
                },
                filter:function(event, player) {
        if (!(event.card.name == 'juedou' || (event.card.name == 'sha'))) return false;
        return player == event.target || event.getParent().triggeredTargets3.length == 1;
    },
                mod:{
                    targetInRange:function(card, player, target, now) {
            if (card.name == 'sha') return true;
        },
                },
                frequent:true,
                content:function() {
        player.draw();
    },
                ai:{
                    effect:{
                        target:function(card, player, target) {
                if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
            },
                        player:function(card, player, target) {
                if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
            },
                    },
                },
            },
            rejiang:{
                shaRelated:true,
                audio:"ext:阴间突破:2",
                audioname:["sp_lvmeng","re_sunben","re_sunce"],
                trigger:{
                    player:"useCardToPlayered",
                    target:"useCardToTargeted",
                },
                filter:function(event, player) {
                    if (!(event.card.name == 'juedou' || (event.card.name == 'sha'))) return false;
                    return player == event.target || event.getParent().triggeredTargets3.length == 1;
                },
                mod:{
                    targetInRange:function(card, player, target, now) {
                        if (card.name == 'sha' && get.color(card) == 'red') return true;
                    },
                },
                frequent:true,
                content:function() {
                    player.draw();
                },
                ai:{
                    effect:{
                        target:function(card, player, target) {
                            if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                        },
                        player:function(card, player, target) {
                            if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                        },
                    },
                },
            },
            "yintieji2":{
                audio:"yintieji",
                forced:true,
                trigger:{
                    player:"phaseEnd",
                },
                filter:function(event,player){
        return player.storage.yintieji>=0;
    },
                content:function(player){
        "step 0"
        player.draw(player.storage.yintieji);
        "step 1"
        player.storage.yintieji=0;
    },
            },
            "yinkurou2":{
                mod:{
                    cardUsable:function(card,player,num){
             if(card.name=='sha') return num+player.storage.yinkurou;
        },
                },
            },
            yinrende:{
                audio:"ext:阴间突破:2",
                enable:"phaseUse",
                group:["yinrende2"],
                filterCard:true,
                selectCard:[1,Infinity],
                discard:false,
                lose:false,
                delay:0,
                mark:true,
                init:function (player){
        player.storage.yinrende=0;
        game.addVideo('仁德',player,['仁德',player.storage.yinrende]);
    },
                intro:{
                    content:"mark",
                },
                marktext:"仁",
                filterTarget:function(card,player,target){
        return player!=target;
    },
                check:function(card){
        if(ui.selected.cards.length>1) return 0;
        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
        if(!ui.selected.cards.length&&card.name=='du') return 20;
        var player=get.owner(card);
        var num=0;
        var evt2=_status.event.getParent();
        var num=0;
        player.getHistory('lose',function(evt){
            if(evt.getParent().skill=='rende'&&evt.getParent(3)==evt2) num+=evt.cards.length;
        });
        if(player.hp==player.maxHp||num>1||player.countCards('h')<=1){
            if(ui.selected.cards.length){
                return -1;
            }
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(players[i].hasSkill('haoshi')&&
                    !players[i].isTurnedOver()&&
                    !players[i].hasJudge('lebu')&&
                    get.attitude(player,players[i])>=3&&
                    get.attitude(players[i],player)>=3){
                    return 11-get.value(card);
                }
            }
            if(player.countCards('h')>player.hp) return 10-get.value(card);
            if(player.countCards('h')>2) return 6-get.value(card);
            return -1;
        }
        return 10-get.value(card);
    },
                content:function(){
        target.gain(cards,player,'giveAuto');
        var evt2=event.getParent(3);
        var num=0;
        player.getHistory('lose',function(evt){
            if(evt.getParent(2).name=='rende'&&evt.getParent(5)==evt2) num+=evt.cards.length;
        });
        player.storage.yinrende+=cards.length;
        game.addVideo('storage',player,['仁德',player.storage.yinrende]);
    },
                ai:{
                    order:function(skill,player){
            if(player.hp<player.maxHp&&player.storage.rende<2&&player.countCards('h')>1){
                return 10;
            }
            return 1;
        },
                    result:{
                        target:function(player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return -10;
                }
                if(target.hasJudge('lebu')) return 0;
                var nh=target.countCards('h');
                var np=player.countCards('h');
                if(player.hp==player.maxHp||player.storage.rende<0||player.countCards('h')<=1){
                    if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
                }
                return Math.max(1,5-nh);
            },
                    },
                    effect:{
                        target:function(card,player,target){
                if(player==target&&get.type(card)=='equip'){
                    if(player.countCards('e',{subtype:get.subtype(card)})){
                        var players=game.filterPlayer();
                        for(var i=0;i<players.length;i++){
                            if(players[i]!=player&&get.attitude(player,players[i])>0){
                                return 0;
                            }
                        }
                    }
                }
            },
                    },
                    threaten:0.8,
                },
            },
            yinshiren:{
                audio:"ext:阴间突破:2",
                enable:["chooseToUse","chooseToRespond"],
                init:function(player){
        player.storage.yinshiren=true;
    },
                filter:function(event,player){
        if (player.storage.yinrende>1&&player.storage.yinshiren&&event.type!='wuxie'){
            return true;
        }
        else return false;
    },
                hiddenCard:function(player,name){
        return true;
    },
                onremove:true,
                chooseButton:{
                    dialog:function(event,player){
        var list=[];
            for(var i=0;i<lib.inpile.length;i++){
                var name=lib.inpile[i];
                if(name=='sha'){
                    list.push(['基本','','sha']);
                    for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                }
                else if(get.type(name)=='basic') list.push(['基本','',name]);
            }
            return ui.create.dialog('施仁',[list,'vcard']);
        },
                    filter:function(button,player){
            return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function(button){
            var player=_status.event.player;
            if(player.countCards('hs',button.link[2])>0) return 0;
            if(button.link[2]=='wugu') return 0;
            var effect=player.getUseValue(button.link[2]);
            if(effect>0) return effect;
            return 0;
        },
                    backup:function(links,player){
            return {
                filterCard:true,
                audio:'yinshiren',
                selectCard:0,
                popname:true,
                onuse:function(result,player){
                    player.storage.yinrende-=2;
                    player.storage.yinshiren=false;
                },
                check:function(card){
                    return 6-get.value(card);
                },
                viewAs:{name:links[0][2],nature:links[0][3]},
            }
        },
                    prompt:function(links,player){
            return '将一张牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用或打出';
        },
                },
                ai:{
                    skillTagFilter:function(player){
            if(!player.countCards('hes')||player.hasSkill('taoluan3')) return false;
            if(!player.storage.taoluan.contains('tao')){}
            else if(player.isDying()&&!player.storage.taoluan.contains('jiu')){}
            else return false;
        },
                    order:4,
                    result:{
                        player:function(player){
                var allshown=true,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i].ai.shown==0){
                        allshown=false;
                    }
                    if(players[i]!=player&&players[i].countCards('h')&&get.attitude(player,players[i])>0){
                        return 1;
                    }
                }
                if(allshown) return 1;
                return 0;
            },
                    },
                    threaten:1.9,
                },
                group:"yinshiren2",
            },
            "yinshiren2":{
                forced:true,
                trigger:{
                    global:"phaseBegin",
                },
                content:function(){
        player.storage.yinshiren=true;
    },
            },
            "yinrende2":{
                forced:true,
                mark:true,
                trigger:{
                    player:["yinrendeAfter","yinshirenAfter"],
                },
                init:function (player){
        player.storage.yinrende=0;
        game.addVideo('仁德',player,['仁德',player.storage.yinrende]);
    },
                intro:{
                    content:"mark",
                },
                marktext:"仁",
                content:function(){
        game.addVideo('仁德',player,['仁德',player.storage.yinrende]);
    },
            },
            yinjijiang:{
                audio:"ext:阴间突破:2",
                audioname:["liushan","re_liubei","re_liushan","ol_liushan"],
                unique:true,
                group:["jijiang1"],
                zhuSkill:true,
                filter:function(event,player){
        if(!player.hasZhuSkill('yinjijiang')||!game.hasPlayer(function(current){
            return current!=player&&current.group=='shu';
        })) return false;
        return !event.jijiang&&(event.type!='phase'||!player.hasSkill('jijiang3'));
    },
                enable:["chooseToUse","chooseToRespond"],
                viewAs:{
                    name:"sha",
                },
                filterCard:function(){return false},
                selectCard:-1,
                ai:{
                    order:function(){
            return get.order({name:'sha'})+0.3;
        },
                    respondSha:true,
                    skillTagFilter:function(player){
            if(!player.hasZhuSkill('jijiang')||!game.hasPlayer(function(current){
                return current!=player&&current.group=='shu';
            })) return false;
        },
                    yingbian:function(card,player,targets,viewer){
            if(get.attitude(viewer,player)<=0) return 0;
            var base=0,hit=false;
            if(get.cardtag(card,'yingbian_hit')){
                hit=true;
                if(targets.filter(function(target){
                    return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_all')){
                if(game.hasPlayer(function(current){
                    return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_damage')){
                if(targets.filter(function(target){
                    return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                    },true))&&!target.hasSkillTag('filterDamage',null,{
                        player:player,
                        card:card,
                        jiu:true,
                    })
                })) base+=5;
            }
            return base;
        },
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    result:{
                        target:function(player,target,card,isLink){
                var eff=function(){
                    if(!isLink&&player.hasSkill('jiu')){
                        if(!target.hasSkillTag('filterDamage',null,{
                            player:player,
                            card:card,
                            jiu:true,
                        })){
                            if(get.attitude(player,target)>0){
                                return -7;
                            }
                            else{
                                return -4;
                            }
                        }
                        return -0.5;
                    }
                    return -1.5;
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function(card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function(card){
                if(card.nature) return 1;
            },
                        fireDamage:function(card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function(card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function(card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            "yinjiang2":{
                mod:{
                    aiOrder:function(player,card,num){
            if(card.name=='sha'&&get.color(card)=="red") return num+2;
        },
                    targetInRange:function(card,player){
            if(_status.currentPhase==player&&card.name=='sha'&&get.color(card)=="red") return true;
        },
                    cardUsable:function(card,player){
            if(_status.currentPhase==player&&card.name=='sha'&&get.color(card)=="red") return Infinity;
        },
                },
                trigger:{
                    player:"useCard1",
                },
                filter:function(event,player){
        if(_status.currentPhase==player&&event.card.name=='sha'&&
        get.color(event.card)=="red"&&event.addCount!==false) return true;
        return false;
    },
                forced:true,
                popup:false,
                firstDo:true,
                content:function(){
        trigger.addCount=false;
        if(player.stat[player.stat.length-1].card.sha>0){
            player.stat[player.stat.length-1].card.sha--;
        }
    },
            },
            yinkeji:{
                audio:"ext:阴间突破:2",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                init:function(player){
        player.storage.yinkeji=true;
    },
                frequent:function(event,player){
        return player.needsToDiscard();
    },
                filter:function(event,player){
        if(player.getHistory('skipped').contains('phaseUse')&&player.yinkeji) return true;
        var history=player.getHistory('useCard').concat(player.getHistory('respond'));
        for(var i=0;i<history.length;i++){
            if(history[i].card.name=='sha'&&history[i].isPhaseUsing()||!player.yinkeji) return false;
        }
        return true;
    },
                content:function(){
        trigger.cancel();
    },
            },
            "yinbotu2":{
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                mark:true,
                init:function (player){
        player.storage.yinbotu2=0;
        game.addVideo('storage',player,['博图',player.storage.yinbotu2]);
    },
                intro:{
                    content:"mark",
                },
                marktext:"图",
                content:function (){
        "step 0"
        player.yinkeji=true;
        player.storage.yinbotu2=player.countCards('he');
        player.markSkill("yinbotu2")
        player.syncStorage('yinbotu2');
        "step 1"
        game.addVideo('stoarge',player,['博图',player.storage.yinbotu2]);
    },
            },
            yinbotu:{
                mark:true,
                group:["yinbotu2"],
                direct:true,
                audio:"ext:阴间突破:4",
                trigger:{
                    player:"phaseBegin",
                },
                content:function(){
        'step 0'
        var list=[];
        if (player.storage.yinbotu2>0) {
            list.push('手牌数补至'+player.storage.yinbotu2+"张，且本回合〖克己〗失效，且【杀】无次数限制");
            list.push("本回合的出牌阶段，你可以移动场上的一张牌");
            player.chooseControl().set('choiceList',list);                         
        }
        else {event.goto(2);}
        'step 1'
        if(result.index==0){
            var num = [3, 4].randomGet()
            game.playYin("yinbotu" + num);
            player.draw(player.storage.yinbotu2-player.countCards('h'));
            player.yinkeji=false;
            player.addTempSkill("yinbotu4","phaseUseEnd")
            event.finish();
        }
        'step 2'
        var num = [1, 2].randomGet()
        player.storage.yinkeji=true;
        game.playYin("yinbotu" + num);
        player.addTempSkill("yinbotu3","phaseUseEnd")
    },
            },
            "yinbotu3":{
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
        return player.canMoveCard()
    },
                content:function(){
        var num = [1, 2].randomGet()
        game.playYin("yinbotu" + num);
        player.moveCard()
    },
            },
            "yinbotu4":{
                mod:{
                    cardUsable:function(card,player,num){
　　if(card.name=='sha') return Infinity;
　　},
                },
                trigger:{
                    player:"useCard1",
                },
                forced:true,
                filter:function(event,player){
        return !event.audioed&&event.card.name=='sha'&&player.countUsed('sha',true)>1&&event.getParent().type=='phase';
    },
                content:function(){
        var num = [3, 4].randomGet()
        game.playYin("yinbotu" + num);
    },
            },
            yinyicong:{
                audio:"ext:阴间突破:2",
                group:["yinyicong2","yinyicong3"],
                direct:true,
                mod:{
                    globalFrom:function(from,to,current){
            return current-Math.max(0,from.hp+from.storage.yinyicong3);
        },
                    globalTo:function(from,to,current){
            return current+Math.max(0,to.getDamagedHp()-to.storage.yinyicong3);
        },
                },
                ai:{
                    threaten:0.8,
                },
            },
            yinqiaomeng:{
                audio:"ext:阴间突破:2",
                group:["yinqiaomeng2"],
                trigger:{
                    source:"damageBegin3",
                },
                forced:true,
                filter:true,
                content:function(){
        if (get.distance(player,trigger.player)<=1)
            trigger.num++;
    },
                ai:{
                    presha:true,
                },
            },
            "yinqiaomeng2":{
                audio:"yinqiaomeng",
                trigger:{
                    player:"damageBegin1",
                },
                forced:true,
                filter:true,
                content:function(){
        if (!trigger.source.inRange(player))
            trigger.num--;
    },
                ai:{
                    presha:true,
                },
            },
            "yinyicong2":{
                forced:true,
                trigger:{
                    global:"roundStart",
                },
                init:function(player){
        player.storage.yinyicong=true;
    },
                content:function(){
        "step 0"
        if(!player.storage.yinyicong){
            player.draw(2);
            player.storage.yinyicong3+=1;
        }
        "step 1"
        player.storage.yinyicong=false;
        player.markSkill('yinyicong3');
        player.syncStorage('yinyicong3');
    },
            },
            "yinyicong3":{
                audio:"yinyicong",
                forced:true,
                trigger:{
                    player:"damageEnd",
                },
                mark:true,
                filter:true,
                init:function (player){
        player.storage.yinyicong3=0;
    },
                intro:{
                    content:function (storage){
            return '拥有标记：'+storage+'个';
        },
                    name:"义从",
                },
                marktext:"猛",
                content:function(){
        "step 0"
        player.storage.yinyicong=true;
        player.storage.yinyicong3=0;
        "step 1"
        player.markSkill('yinyicong3');
        player.syncStorage('yinyicong3');
    },
            },
            yinwusheng:{
                mod:{
                    targetInRange:function (card){
            if(get.color(card)=='red'&&card.name=='sha') return true;
        },
                },
                group:["yinwusheng_sha"],
                locked:false,
                audio:"wusheng",
                audioname:["re_guanyu","guanzhang","jsp_guanyu","guansuo"],
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function(card,player){
        if(get.zhu(player,'shouyue')) return true;
        return get.color(card)=='red';
    },
                position:"hes",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function(player){
        if(get.zhu(player,'shouyue')){
            if(!player.countCards('hes')) return false;
        }
        else{
            if(!player.countCards('hes',{color:'red'})) return false;
        }
    },
                prompt:"将一张红色牌当杀使用或打出",
                check:function(card){return 4-get.value(card)},
                ai:{
                    respondSha:true,
                    skillTagFilter:function(player){
            if(get.zhu(player,'shouyue')){
                if(!player.countCards('hes')) return false;
            }
            else{
                if(!player.countCards('hes',{color:'red'})) return false;
            }
        },
                    yingbian:function(card,player,targets,viewer){
            if(get.attitude(viewer,player)<=0) return 0;
            var base=0,hit=false;
            if(get.cardtag(card,'yingbian_hit')){
                hit=true;
                if(targets.filter(function(target){
                    return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_all')){
                if(game.hasPlayer(function(current){
                    return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_damage')){
                if(targets.filter(function(target){
                    return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                    },true))&&!target.hasSkillTag('filterDamage',null,{
                        player:player,
                        card:card,
                        jiu:true,
                    })
                })) base+=5;
            }
            return base;
        },
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    order:function(item,player){
            if(player.hasSkillTag('presha',true,null,true)) return 10;
            if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                    return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                    return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) return 3.1;
                return 3;
            }
            return 3.05;
        },
                    result:{
                        target:function(player,target,card,isLink){
                var eff=function(){
                    if(!isLink&&player.hasSkill('jiu')){
                        if(!target.hasSkillTag('filterDamage',null,{
                            player:player,
                            card:card,
                            jiu:true,
                        })){
                            if(get.attitude(player,target)>0){
                                return -7;
                            }
                            else{
                                return -4;
                            }
                        }
                        return -0.5;
                    }
                    return -1.5;
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function(card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function(card){
                if(card.nature) return 1;
            },
                        fireDamage:function(card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function(card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function(card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
                subSkill:{
                    sha:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        audio:"yinwusheng",
                        filter:function(event,player){
        return event.card.name=='sha'&&event.target.inRange(player);
    },
                        logTarget:"target",
                        content:function(){
        trigger.getParent().reanjian_buffed=true;
        var map=trigger.customArgs;
        var id=trigger.target.playerid;
        if(!map[id]) map[id]={};
        if(!map[id].extraDamage) map[id].extraDamage=0;
        map[id].extraDamage++;
        trigger.target.addTempSkill('reanjian2');
        trigger.target.addTempSkill('reanjian4');
        trigger.target.storage.reanjian2.add(trigger.card);
    },
                        ai:{
                            "unequip_ai":true,
                            skillTagFilter:function(player,tag,arg){
            if(arg&&arg.name=='sha'&&arg.target&&!arg.target.inRange(player)) return true;
            return false;
        },
                        },
                        sub:true,
                    },
                },
            },
            yinyijue:{
                audio:"ext:阴间突破:2",
                enable:"phaseUse",
                nopop:true,
                group:["yinyijue_usable"],
                filter:function (event,player){
        return player.countCards('h')>0&&player.storage.usable;
    },
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('h');
    },
                content:function (){
        'step 0'
        tar=target;
        player.chooseCard('h');
        'step 1'
        if(result.bool==true){
            pcard=result.cards[0];
            player.showCards(pcard);
            player.storage.usable=false;
        }
        else{
            event.finish();
        }
        'step 2'
        target.chooseCard('h',true).ai=function(card){
            if(card.suit==pcard.suit) return 6;
        }
        'step 3'
        tcard=result.cards[0];
        target.showCards(tcard);
        'step 4'
        if (get.suit(tcard)==get.suit(pcard)){
            player.gain(tcard,event.target,'give');
            if(target.hp<target.maxHp){
                player.chooseBool('是否让目标回复一点体力？').ai=function(event,player){
                    return get.recoverEffect(target,player,player)>0;
                }
            }
        }
        else{
            if(!target.hasSkill('fengyin')){
                target.addTempSkill('fengyin');
            }
            target.addTempSkill('yinyijue2');
            player.$give(pcard.length,target);
            event.target.gain(pcard,player);
            event.finish();
        }
        'step 5'
        if(result.bool){
            target.recover();
        }
    },
                ai:{
                    threaten:1.5,
                    order:8,
                    result:{
                        player:function (player,target){
                if(get.attitude(player,target)>0) return 1.5;
                return 0.5;
            },
                    },
                },
                subSkill:{
                    usable:{
                        direct:true,
                        trigger:{
                            player:"phaseUseBefore",
                        },
                        content:function(){
                player.storage.usable=true;
            },
                        sub:true,
                    },
                },
            },
            "yinyijue2":{
                trigger:{
                    player:"damageBegin1",
                },
                filter:true,
                silent:true,
                popup:false,
                forced:true,
                content:function(){
        trigger.num++;
    },
                mark:true,
                mod:{
                    "cardEnabled2":function(card){
            if(get.position(card)=='h') return false;
        },
                },
                intro:{
                    content:"不能使用或打出手牌",
                },
            },
            yinjijiu:{
                mod:{
                    aiValue:function(player,card,num){
            if(get.name(card)!='tao'&&get.color(card)!='red') return;
            var cards=player.getCards('hs',function(card){
                return get.name(card)=='tao'||get.color(card)=='red';
            });
            cards.sort(function(a,b){
                return (get.name(a)=='tao'?1:2)-(get.name(b)=='tao'?1:2);
            });
            var geti=function(){
                if(cards.contains(card)){
                    return cards.indexOf(card);
                }
                return cards.length;
            };
            return Math.max(num,[6.5,4,3,2][Math.min(geti(),2)]);
        },
                    aiUseful:function(){
            return lib.skill.kanpo.mod.aiValue.apply(this,arguments);
        },
                },
                locked:false,
                audio:"ext:阴间突破:2",
                audioname:["re_huatuo"],
                group:["yinjijiu2"],
                enable:"chooseToUse",
                viewAsFilter:function(player){
        return player!=_status.currentPhase&&player.countCards('hes',{color:'red'})>0;
    },
                filterCard:function(card){
        return get.color(card)=='red';
    },
                position:"hes",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张红色牌当桃使用",
                check:function(card){return 15-get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:function(card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[6.5,4,3,2],
                        value:[6.5,4,3,2],
                    },
                    result:{
                        target:2,
                        "target_use":function(player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            yinqingnang:{
                subSkill:{
                    off:{
                        sub:true,
                    },
                    "off2":{
                        sub:true,
                    },
                },
                audio:"qingnang",
                enable:"phaseUse",
                filterCard:true,
                check:function (card){
        var player=_status.event.player;
        if(game.countPlayer(function(current){
            return (get.recoverEffect(current,player,player)>0&&get.attitude(player,current)>2);
        })>1&&get.color(card)=='black'&&player.countCards('h',{color:'red'})>0) return 3-get.value(card);
        return 9-get.value(card);
    },
                filter:function (event,player){
        return !player.hasSkill('new_reqingnang_off2');
    },
                filterTarget:function (card,player,target){
        if(target.hp>=target.maxHp||target.hasSkill('new_reqingnang_off')) return false;
        return true;
    },
                content:function (){
        target.addTempSkill('new_reqingnang_off');
        if(get.color(cards[0])=='black') player.addTempSkill('new_reqingnang_off2');
        target.recover();
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            yinkailu:{
                audio:"ext:阴间突破:2",
                skillAnimation:true,
                animationStr:"开颅",
                animationColor:"white",
                trigger:{
                    global:"dying",
                },
                filter:function(event,player){
        return event.player!=player;
    },
                check:function(event,player){
        return get.attitude(player,event.player)>0;
    },
                content:function(){
        'step 0'
        var num = trigger.player.maxHp-trigger.player.hp
        trigger.player.recover(num);
        if(num<=5){
            trigger.player.draw(2*(5-num))
        }
        'step 1'
        player.die()
    },
                logTarget:"player",
            },
            yinwuqin:{
                audio:"ext:阴间突破:2",
                group:["yinwuqin2"],
                trigger:{
                    player:"phaseEnd",
                },
                filter:function(event,player){
        return !event.numFixed;
    },
                content:function(){
        "step 0"
        event.cards=get.cards(2);
        game.cardsGotoOrdering(event.cards);
        event.videoId=lib.status.videoId++;
        game.broadcastAll(function(player,id,cards){
            var str;
            if(player==game.me&&!_status.auto){
                str='五禽：获取颜色各不相同的牌';
            }
            else{
                str='五禽';
            }
            var dialog=ui.create.dialog(str,cards);
            dialog.videoId=id;
        },player,event.videoId,event.cards);
        event.time=get.utc();
        game.addVideo('showCards',player,['五禽',get.cardsInfo(event.cards)]);
        game.addVideo('delay',null,2);
        "step 1"
        var next=player.chooseButton([0,2],true);
        next.set('dialog',event.videoId);
        next.set('filterButton',function(button){
            for(var i=0;i<ui.selected.buttons.length;i++){
                if(get.color(ui.selected.buttons[i].link)==get.color(button.link)) return false;
            }
            return true;
        });
        next.set('ai',function(button){
            return get.value(button.link,_status.event.player);
        });
        "step 2"
        if(result.bool&&result.links){
            event.cards2=result.links;
        }
        else{
            event.finish();
        }
        var time=1000-(get.utc()-event.time);
        if(time>0){
            game.delay(0,time);
        }
        "step 3"
        game.broadcastAll('closeDialog',event.videoId);
        var cards2=event.cards2;
        player.gain(cards2,'log','gain2');
    },
                ai:{
                    threaten:1.2,
                },
            },
            "yinwuqin2":{
                audio:"yinwuqin",
                locked:true,
                trigger:{
                    player:"die",
                },
                forceDie:true,
                direct:true,
                skillAnimation:true,
                animationColor:"gray",
                content:function(){
        'step 0'
        player.chooseTarget('请选择【五禽】的目标','选择一名其他角色，令其获得技能【五禽】',true,lib.filter.notMe).set('forceDie',true).set('ai',function(target){
            return get.attitude(_status.event.player,target);
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('yinwuqin',target);
            target.markSkill('yinwuqin');
            target.addSkillLog('yinwuqin');
        }
    },
                intro:{
                    content:"您已经习得五禽戏",
                },
            },
            "yinjijiu2":{
                audio:"yinjijiu",
                trigger:{
                    global:["dyingAfter"],
                },
                filter:function(event,player){
        return event.player!=player;
    },
                forced:true,
                content:function(){
        player.draw();
    },
            },
            yinyaowu:{
                trigger:{
                    player:"damageBegin3",
                },
                audio:"ext:阴间突破:2",
                filter:function (event){
        return (get.color(event.card)!='red'||event.source&&event.source.isAlive());
    },
                forced:true,
                check:function (event){
        if(event.card&&(event.card.name=='sha')){
            return get.color(event.card)=='black';
        }
    },
                content:function (){
        if(get.color(trigger.card)!='red') player.draw(Math.ceil((player.hp)/2));
        else{
            trigger.source.chooseDrawRecover(true);
            player.loseMaxHp();
            player.draw(player.maxHp-player.hp+1);
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(card.name=='sha'&&(get.color(card)=='red')&&get.attitude(player,target)<=0){
                    return [1,0.8,1,0];
                }
                if(card.name=='sha'&&(get.color(card)=='black')){
                    return [1,0.4];
                }
            },
                    },
                },
            },
            yinxiaoji:{
                audio:"ext:阴间突破:2",
                audioname:["sp_sunshangxiang","re_sunshangxiang"],
                trigger:{
                    player:"loseAfter",
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                },
                frequent:true,
                filter:function(event,player){
        var evt=event.getl(player);
        return evt&&evt.player==player&&evt.es&&evt.es.length>0;
    },
                content:function(){
        "step 0"
        event.count=trigger.getl(player).es.length;
        "step 1"
        event.count--;
        var num=0;
        console.log(player.isEmpty(1)+player.isEmpty(2)+player.isEmpty(3)+player.isEmpty(4)+player.isEmpty(5))
         console.log(event.count)
        if(event.count==0&&(player.isEmpty(1)+player.isEmpty(2)+player.isEmpty(3)+player.isEmpty(4)+player.isEmpty(5)>=4)){
            num=1
        }
        player.draw(2+num);
        "step 2"
        if(event.count>0){
            player.chooseBool(get.prompt2('xiaoji')).set('frequentSkill','xiaoji').ai=lib.filter.all;
        }
        "step 3"
        if(result.bool){
            player.logSkill('yinxiaoji');
            event.goto(1);
        }
    },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
            },
                    },
                },
            },
            yinjieyin:{
                audio:"ext:阴间突破:2",
                enable:"phaseUse",
                filterCard:true,
                usable:1,
                position:"he",
                filter:function(event,player){
        return player.countCards('he')>0;
    },
                check:function(card){
        var player=_status.event.player;
        if(get.position(card)=='e'){
            var subtype=get.subtype(card);
            if(!game.hasPlayer(function(current){
                return current!=player&&current.hp!=player.hp&&get.attitude(player,current)>0&&!current.countCards('e',{subtype:subtype});
            })){
                return 0;
            }
            if(player.countCards('h',{subtype:subtype})) return 20-get.value(card);
            return 10-get.value(card);
        }
        else{
            if(player.countCards('e')) return 0;
            if(player.countCards('h',{type:'equip'})) return 0;
            return 8-get.value(card);
        }
    },
                filterTarget:function(card,player,target){
        if(!target.hasSex('male')) return false;
        var card=ui.selected.cards[0];
        if(!card) return false;
        if(get.position(card)=='e'&&!target.isEmpty(get.subtype(card))) return false;
        return true;
    },
                discard:false,
                delay:false,
                lose:false,
                content:function(){
        'step 0'
        if(get.position(cards[0])=='e') event._result={index:0};
        else if(get.type(cards[0])!='equip'||!target.isEmpty(get.subtype(cards[0]))) event._result={index:1};
        else player.chooseControl().set('choiceList',[
            '将'+get.translation(cards[0])+'置入'+get.translation(target)+'的装备区',
            '弃置'+get.translation(cards[0]),
        ]).ai=function(){return 1};
        'step 1'
        if(result.index==0){
            player.$give(cards,target,false);
            target.equip(cards[0]);
        }
        else{
            player.discard(cards);
        }
        'step 2'
        if(player.hp>target.hp){
            player.draw();
            if(target.isDamaged()) target.recover();
        }
        else if(player.hp<target.hp){
            target.draw();
            if(player.isDamaged()) player.recover();
        }
        'step 3'
        if(target==player.storage.yinjieyin){
            player.draw();
        }
        player.storage.yinjieyin=target;
    },
                ai:{
                    order:function(){
            var player=_status.event.player;
            var es=player.getCards('e');
            for(var i=0;i<es.length;i++){
                if(player.countCards('h',{subtype:get.subtype(es[i])})) return 10;
            }
            return 2;
        },
                    result:{
                        target:function(player,target){
                var goon=function(){
                    var es=player.getCards('e');
                    for(var i=0;i<es.length;i++){
                        if(player.countCards('h',{subtype:get.subtype(es[i])})) return true;
                    }
                    return false;
                }
                var num=0;
                if(player.storage.yinjieyin==target){
                    num=0.5;
                }
                if(player.hp<target.hp){
                    if(player.isHealthy()){
                        if(!player.needsToDiscard(1)||goon()) return 0.1+num;
                        return 0+num;
                    }
                    return 1.5+num;
                }
                if(player.hp>target.hp){
                    if(target.isHealthy()){
                        if(!player.needsToDiscard(1)||goon()) return 0.1+num;
                        return 0+num;
                    }
                    return 1+num;
                }
                return 0+num;
            },
                    },
                },
            },
            yindaoku:{
                audio:"ext:阴间突破:2",
                unique:true,
                enable:"phaseUse",
                mark:true,
                skillAnimation:true,
                animationStr:"刀库",
                animationColor:"wood",
                limited:true,
                init:function(player) {
        player.storage.yindaoku = false;
    },
                content:function() {
        'step 0'
        player.awakenSkill('yindaoku');
        player.storage.yindaoku = true;
        player.discard(player.getCards('e'));
        'step 1'
        game.countPlayer(function(current) {
            if(current.countCards('e')>0&&current!=player){
               player.gainPlayerCard(current,'e',true); 
            }});
    },
                intro:{
                    content:"limited",
                },
            },
            yinrenshi:{
                trigger:{
                    player:"phaseEnd",
                },
                audio:"ext:阴间突破:2",
                content:function(){
        var num=player.countCards('h')
        game.countPlayer(function(current) {
        if(current.countCards('h')==num){
           current.draw(2); 
        }});
    },
            },
        },
        translate:{
            "1":"1",
            "2":"2",
            "1_info":"",
            yinlongdan:"龙胆",
            "yinlongdan_info":"你可以将【杀】当做【闪】打出，当你如此做时，你可以选择一名除你自身外的角色，你对其造成一点伤害，或将【闪】当做【杀】使用或打出，当你如此做时，你可以选择一名角色，其回复一点体力。",
            yintuxi:"突袭",
            "yintuxi_info":"摸牌阶段摸牌后，你可以获得至多X名角色的各一张牌，然后弃置X张牌。（X最多为你本阶段摸牌数）",
            yinyeguan:"夜观",
            "yinyeguan_info":"限定技 任何角色的准备阶段，你可以观看牌堆顶的3张牌，并将其以任意顺序置于牌堆项或牌堆底。",
            yinguanxin:"观星",
            "yinguanxin_info":"准备阶段，你可以观看牌堆顶的5张牌（存活角色小于4时改为3张），并将其以任意顺序置于牌堆项或牌堆底，若你将〖观星〗的牌都放在了牌堆底，则【夜观】视为未发动过。",
            "2_info":"",
            yinkongcheng:"空城",
            "yinkongcheng_info":"所有人展示武将牌后或一名角色回合结束后，你可以将全部手牌扣置于武将牌上。若如此做，你的出牌阶段开始前，你获得所有武将牌上的牌。锁定技，当你没有手牌时，你不能成为【杀】或【决斗】的目标。",
            "yinkongcheng2":"空城",
            "yinkongcheng2_info":"游戏开始或一名角色回合结束后，你可以将全部手牌扣置于武将牌上。若如此做，你的出牌阶段开始前，你获得所有武将牌上的牌。锁定技，当你没有手牌时，你不能成为【杀】或【决斗】的目标。",
            "yinkongcheng3":"空城",
            "yinkongcheng3_info":"",
            "yinqianxun2":"谦逊",
            "yinqianxun2_info":"",
            yinfenwei:"奋威",
            "yinfenwei_info":"每轮限一次，当一名角色使用的锦囊牌指定了至少两名角色为目标时，你可以令此牌对其中任意名角色无效。",
            yinqixi:"奇袭",
            "yinqixi_info":"出牌阶段限X次，你可以将一张黑色牌当做【过河拆桥】使用并摸一张牌。（X为你的体力上限)",
            yinyiji:"遗计",
            "yinyiji_info":"当你受到1点伤害后，你可以进行一次判定。",
            yinzhaxiang:"诈降",
            "yinzhaxiang_info":"锁定技 每当你失去1点体力后，你摸3张牌，若此时是你的回合，你弃置X张牌（X为发动此技能的次数，且最大为2）。",
            "yinzhaxiang2":"诈降",
            "yinzhaxiang2_info":"",
            yinkurou:"苦肉",
            "yinkurou_info":"出牌阶段，你可以失去一点体力，若此时在你的回合内，你可以额外使用X张【杀】（X为发动此技能的次数）。",
            yinzhiheng:"制衡",
            "yinzhiheng_info":"出牌阶段限一次，你可以弃置任意张牌，摸等量的牌，若此时你的手牌数小于手牌上限，你摸至手牌上限，若你在发动〖制衡〗时弃置了所有手牌，则你再摸一张牌。",
            yinquanshu:"权术",
            "yinquanshu_info":"出牌阶段限一次，你可以弃置两张牌，摸一张牌，获得一个“权”标记。锁定技，你的手牌上限+X（X为权的数量）",
            yinqianxun:"谦逊",
            "yinqianxun_info":"每当一张延时类锦囊牌或任意角色使用的不为装备牌的牌生效时，若你是此牌的目标，你可以将所有手牌置于你的武将牌上，若如此做，此回合结束时或你收到伤害后，你获得你武将牌上的所有牌。",
            "yinliyu2":"yinliyu2",
            "yinliyu2_info":"",
            yinliyu:"利驭",
            "yinliyu_info":"①当你使用【杀】对一名其他角色造成伤害后，你可以获得其一张牌。若此牌不为装备牌，则其摸一张牌。若此牌为装备牌，则视为你对其选择的另一名角色使用一张【决斗】。②①当你使用【决斗】对一名其他角色造成伤害后，你可以获得其一张牌。若此牌不为装备牌，则其摸两张牌。若此牌为装备牌，则其摸一张牌，视为你对其选择的另一名角色使用一张【决斗】。",
            "yinjiuzhu2":"救助2",
            "yinjiuzhu2_info":"",
            yinjiuzhu:"救助",
            "yinjiuzhu_info":"主公技，其他吴势力角色对自己使用【桃】时，若其体力值大于你，则其可以选择令你回复1点体力，然后其摸1张牌。",
            yinjiuyuan:"救援",
            "yinjiuyuan_info":"主公技，锁定技，其他吴势力角色对你使用【桃】后你摸两张牌。",
            yinguishu:"鬼术",
            "yinguishu_info":"出牌阶段限一次，你可以将一张梅花牌当做【兵粮寸断】对自己使用，然后摸一张牌。",
            yinguidao:"鬼道",
            "yinguidao_info":"一名角色的判定牌生效前，你可以打出一张黑色牌作为判定牌并获得原判定牌。若你以此法打出的牌为黑桃，则你摸一张牌。",
            yintieji:"铁骑",
            "yintieji_info":"当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的非锁定技失效直到回合结束。判定结果为红，你于当前回合结束时摸两张牌；为黑此杀伤害+1。除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。直到回合结束。判定结果为红，你摸一张牌；为黑其弃置一张牌。除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
            yinmashu:"马术",
            "yinmashu_info":"锁定技，你计算与其他角色的距离时-X。（X为你的当前体力值）",
            yinliyong:"厉勇",
            "yinliyong_info":"每当你使用【杀】被【闪】抵消后，你可以摸一张牌。",
            yinlianhuo:"连火",
            "yinlianhuo_info":"出牌阶段限1次，你可以弃置一张梅花牌，所有武将牌横置的玩家失去一点体力，在场所有角色进入连环状态，并对一名角色造成一点火焰伤害。",
            yinniepan:"涅槃",
            "yinniepan_info":"限定技，当你处于濒死状态时，你可以弃置你区域内的所有牌并复原你的武将牌，然后摸三张牌并增加1点体力上限,将体力回复至4点。然后你选择获得以下技能中的一个：〖八阵〗/〖火计〗/〖看破〗",
            yinfanjian:"反间",
            "yinfanjian_info":"出牌阶段限X次，你可以展示一张手牌并将此牌交给一名其他角色。然后该角色选择一项：展示其手牌并弃置所有与此牌花色相同的牌，或失去一点体力。（X为你损失的体力值且至少为1）",
            yinyingzi:"英姿",
            "yinyingzi_info":"锁定技，摸牌阶段摸牌时，你额外摸X张牌；你的手牌上限为你的体力上限。（X为你已损失的体力值且至少为1）",
            yinganglie:"刚烈",
            "yinganglie_info":"每当你受到1点伤害后，可进行一次判定，若结果为红色，你对伤害来源造成1点伤害并摸一张牌，若结果为黑色，你弃置其X张牌。（X为你已失去的体力且最少为1）",
            yinleiji:"雷击",
            "yinleiji_info":"当你使用或打出【闪】或【闪电】时，你可以进行判定。当你进行判定后，若判定结果为：黑桃，你选择一名其他角色，对其造成3点雷电伤害;梅花，你回复1点体力并摸1张牌，然后你选择一名其他角色，对其造成1点雷电伤害。",
            yinpaoxiao:"咆哮",
            "yinpaoxiao_info":"锁定技，你使用【杀】无次数无距离限制，你的【杀】可指定X名其他角色为目标。（X为此回合出杀数）",
            yinlianying:"连营",
            "yinlianying_info":"当你失去最后的手牌时，你可以令至多X名角色各摸一张牌（X为你此次失去的手牌数）。",
            yintiandu:"天妒",
            "yintiandu_info":"当你的判定牌生效后，你可以获得之。若判定结果为：红，你摸两张牌;黑，你摸1张牌，然后选择1名角色，弃置其区域内的一张牌。然后你可以将一张手牌交给一名角色，将另一张手牌交给一名角色。",
            yinfankui:"反馈",
            "yinfankui_info":"每当你受到1点伤害后，你可以令伤害来源获得一张牌，然后获得伤害来源的两张牌。",
            yinguicai:"鬼才",
            "yinguicai_info":"一名角色的判定牌生效前，你可以打出一张牌替换之。",
            yinyinghun:"英魂",
            "yinyinghun_info":"准备阶段开始时，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后交给你一张牌；或你摸一张牌，交给其一张牌，然后其弃置X张牌，你从其弃置的牌中选一张获得（X为你已损失的体力值）",
            "yinleiji2":"雷击",
            "yinleiji2_info":"",
            yinwulie:"武烈",
            "yinwulie_info":"结束阶段开始时，你摸可以X张牌（X为你已损失的体力值/2，向下取整）",
            yinzhiba:"制霸",
            "yinzhiba_info":"主公技，其他吴势力的角色的出牌阶段限一次，其可以与你拼点（你可拒绝此拼点）。若其没赢，你可以获得两张拼点牌。你的出牌阶段限一次，你可以和一名吴势力角色拼点，若你赢，你获得两张拼点牌。",
            yinhunzi:"魂姿",
            "yinhunzi_info":"觉醒技，准备阶段开始时，若你的体力值为1，你摸2张牌，然后失去技能〖界激昂〗〖界英姿〗和〖界英魂〗，获得技能〖阴激昂〗〖阴英姿〗和〖阴英魂〗。",
            yinpingdong:"平东",
            "yinpingdong_info":"觉醒技，准备阶段开始时，若你的体力值小于等于轮数，你减1点体力上限，然后失去〖激昂〗，获得技能〖界激昂〗〖界英姿〗和〖界英魂〗。",
            "yinyinghun2":"英魂",
            "yinyinghun2_info":"准备阶段，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值）",
            "yinyingzi2":"英姿",
            "yinyingzi2_info":"锁定技，摸牌阶段摸牌时，你额外摸一张牌；你的手牌上限为你的体力上限。",
            yinscyingzi:"英姿",
            "yinscyingzi_info":"锁定技，摸牌阶段摸牌时，你额外摸X张牌；你的手牌上限为你的体力上限。（X为你已损失的体力值且至少为1）",
            yinscyinghun:"英魂",
            "yinscyinghun_info":"准备阶段，若你已受伤，你可令一名其他角色执行一项：摸X张牌，然后交给你一张牌；或你摸一张牌，交给其一张牌，然后其弃置X张牌，你从其弃置的牌中选一张获得（X为你已损失的体力值）",
            bgmbegin:"bgmbegin",
            "bgmbegin_info":"",
            bgmend:"bgmend",
            "bgmend_info":"",
            ojiang:"激昂",
            "ojiang_info":"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸一张牌。",
            yinjiang:"激昂",
            "yinjiang_info":"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或【杀】时，你可以摸一张牌，你使用【杀】无距离限制，你使用的红色【杀】无次数限制。",
            rejiang:"激昂",
            "rejiang_info":"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或【杀】时，你可以摸一张牌，你使用红色【杀】无距离限制。",
            "yintieji2":"铁骑",
            "yintieji2_info":"",
            "yinkurou2":"苦肉",
            "yinkurou2_info":"",
            yinrende:"仁德",
            "yinrende_info":"出牌阶段，你可以将任意张手牌交给其他角色。当你以此法每给出一张牌，你获得一个“仁”标记。",
            yinshiren:"施仁",
            "yinshiren_info":"每个人的回合限一次，你需要使用或打出一张基本牌时，你可以失去两个“仁”标记，视为你使用或打出一张基本牌。",
            "yinshiren2":"施仁",
            "yinshiren2_info":"",
            "yinrende2":"仁德",
            "yinrende2_info":"",
            yinjijiang:"激将",
            "yinjijiang_info":"主公技，当你需要使用或打出【杀】时，你可以令其他蜀势力角色依次选择是否打出一张【杀】。若有角色响应，则你视为使用或打出了此【杀】。",
            "yinjiang2":"激昂",
            "yinjiang2_info":"锁定技，你的武将牌始终正面向上，你的判定区内的牌效果反转",
            yinkeji:"克己",
            "yinkeji_info":"弃牌阶段开始时，若你于本回合的出牌阶段内没有过使用或打出过【杀】，则你可以跳过此阶段。",
            "yinbotu2":"博图",
            "yinbotu2_info":"",
            yinbotu:"博图",
            "yinbotu_info":"回合开始时，你可以选择一项①将手牌数摸至上回合结束时，你的手牌数加装备数，且本回合〖克己〗失效，你使用〖杀〗无次数限制。②本回合的出牌阶段限一次，你可以移动场上的一张牌。",
            "yinbotu3":"博图",
            "yinbotu3_info":"",
            "yinbotu4":"博图",
            "yinbotu4_info":"",
            yinyicong:"义从",
            "yinyicong_info":"锁定技，你计算与其他角色的距离时-X+Z，其他角色计算与你的距离时+Y-Z。（X为你的体力值，Y为你的已损失体力值，Z为“猛”的数量，X-Z、Y-Z至少为0）。回合开始时，若你于上一回合未受到伤害，你摸两张牌，获得一个“猛”。受到伤害后，你失去所有的“猛”。",
            yinqiaomeng:"趫猛",
            "yinqiaomeng_info":"锁定技，你对与其距离为1的角色造成伤害+1，其他角色对你造成伤害时，若其攻击范围内没你，此伤害-1.",
            "yinqiaomeng2":"趫猛",
            "yinqiaomeng2_info":"",
            "yinyicong2":"义从",
            "yinyicong2_info":"",
            "yinyicong3":"义从",
            "yinyicong3_info":"",
            yinwusheng:"武圣",
            "yinwusheng_info":"你可以将一张红色牌当做【杀】使用或打出。你使用的红色【杀】没有距离限制。当你使用【杀】指定你攻击范围内的角色时，你可以令此杀伤害+1",
            yinyijue:"义绝",
            "yinyijue_info":"出牌阶段限一次，你可以展示一张手牌，然后令另一名角色展示一张手牌。若两张手牌花色相同，你获得其展示的牌，你可以令其回复一点体力；若花色不同，其获得你展示的牌，其所有非锁定技失效，受到伤害+1，且不能使用或打出手牌。",
            "yinyijue2":"义绝",
            "yinyijue2_info":"",
            yinjijiu:"急救",
            "yinjijiu_info":"你的回合外，你可以将一张红色牌当做【桃】使用。每有一名其他角色脱离濒死状态，你摸一张牌",
            yinqingnang:"青囊",
            "yinqingnang_info":"出牌阶段，你可以弃置一张手牌，令一名本回合内未成为过〖青囊〗的目标的角色回复一点体力。若你弃置的是黑色牌，则你本回合内不能再发动〖青囊〗。",
            yinkailu:"开颅",
            "yinkailu_info":"一名角色进入濒死状态时，你可使其将体力回满（若回复体力小于5，则摸两倍回复体力与5的差值的牌，若如此做，你死亡。",
            yinwuqin:"五禽",
            "yinwuqin_info":"结束阶段，你可以从牌堆顶亮出两张牌，然后选择获得不同颜色的牌各一张。",
            "yinwuqin2":"五禽",
            "yinwuqin2_info":"",
            "yinjijiu2":"急救",
            "yinjijiu2_info":"",
            yinyaowu:"耀武",
            "yinyaowu_info":"锁定技，当一对名角色你造成伤害时，若此牌为红色，该角色回复1点体力或摸一张牌，你减少一点体力上限，摸已损失体力值+1的牌。否则则你摸等同你当前体力值除以2的牌（向上取整）。",
            yinxiaoji:"枭姬",
            "yinxiaoji_info":"当你失去一张装备区内的牌后，你可以摸两张牌，若你装备区少于一张装备牌，则你额外摸一张牌。",
            yinjieyin:"结姻",
            "yinjieyin_info":"出牌阶段限一次，你可以选择一名男性角色并弃置一张手牌或将装备区内的一张装备牌置于其装备区，你与其体力较高的角色摸一张牌，体力值较低的角色回复1点体力，若选择目标与上次发动技能选择目标相同，你摸一张牌。",
            yindaoku:"刀库",
            "yindaoku_info":"限定技，出牌阶段，你可以弃置所有装备区的牌，依次获得其他角色装备区的一张牌",
            yinrenshi:"仁世",
            "yinrenshi_info":"回合结束阶段，你可以令全场与你手牌数相同的角色摸2张牌",
        },
    },
    intro:"对“时代的眼泪”的又一次突破",
    author:"WHY",
    diskURL:"",
    forumURL:"",
    version:"0.4.4",
},files:{"character":["yin_huanggai2.jpg","yin_huaxiong2.jpg","yin_guanyu2.jpg","yin_xiahouchun2.jpg","yin_zhaoyun2.jpg","yin_sunshangxiang2.jpg","yin_zhangliao2.jpg","yin_sunjian2.jpg","yin_pangtong2.jpg","yin_zhugeliang2.jpg","yin_lvbu2.jpg","yin_sunce2.jpg","yin_luxun2.jpg","yin_gongsunzan2.jpg","yin_sunquan2.jpg","yin_ganning2.jpg","yin_machao2.jpg","yin_guojia2.jpg","yin_zhangfei2.jpg","yin_lvmeng2.jpg","yin_zhangjiao2.jpg","yin_liubei2.jpg","yin_simayi2.jpg","yin_huatuo2.jpg","yin_zhouyu2.jpg"],"card":[],"skill":[]}}})