new Vue({
    el: '#app',
    data: {
        isStart: false,
        playerHP: 100,
        monsterHP: 100,
        turns: []
    },
    comouted: {


    },
    methods: {
        startGame: function() {
            this.isStart = !this.isStart;
            this.playerHP = 100;
            this.monsterHP = 100;
            this.turns = [];
        },
        attack: function() {
            var damage = this.calculateDamage(10, 3);
            this.monsterHP -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        specialAttack: function() {
            var damage = this.calculateDamage(20, 10);
            this.monsterHP -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });

            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        heal: function() {
            if (this.playerHP <= 90) {
                this.playerHP += 10;
            } else {
                this.playerHP = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + 10
            });
            this.monsterAttack();
        },
        giveUp: function() {
            this.isStart = false;
        },
        monsterAttack: function() {
            var damage = this.calculateDamage(12, 5);
            this.playerHP -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });
            this.checkWin();
        },
        calculateDamage: function(max, min) {
            var damage = Math.max(Math.floor(Math.random() * max), min);
            return damage;
        },
        checkWin: function() {
            if (this.monsterHP <= 0) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.isStart = false;
                }
                return true;
            } else if (this.playerHP <= 0) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.isStart = false;
                }
                return true;
            }
            return false;
        }
    }
});