<template>
  <v-dialog
    v-model="show_dialog"
    persistent
    max-width="400"
  >
    <v-card>

      <div class="pt-5">
        <v-img
          max-height="100"
          max-width="100"
          class="mx-auto"
          :src="monster.image_path"
        ></v-img>
      </div>

      <v-card-title class="font-weight-black justify-center">
        {{ monster.name }}
      </v-card-title>

      <v-card-text>
        <div class="grey--text text-center">
          {{ get_monster_level(monster.monster_level) }}
        </div>
        <div class="text-center">
          <v-icon v-if="monster.is_rain">mdi-weather-pouring</v-icon>
          <v-icon v-if="monster.is_night">mdi-weather-night</v-icon>
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="pt-5 pb-0">
        <v-row class="mt-2 pl-3">
          <v-img
            max-height="50"
            max-width="50"
            src="@/assets/stamp_s.png"
          ></v-img>
          <v-slider
            v-model="num_s"
            color="primary" track-color="grey"
            ticks="always" tick-size="7"
            thumb-label="always" :thumb-size="24"
            min="0" max="4"
            class="pt-3 px-6"
          >
          </v-slider>
        </v-row>
        <v-row class="pl-3">
          <v-img
            max-height="50"
            max-width="50"
            src="@/assets/stamp_a.png"
          ></v-img>
          <v-slider
            v-model="num_a"
            color="primary" track-color="grey"
            ticks="always" tick-size="7"
            thumb-label="always" :thumb-size="24"
            min="0" max="3"
            class="pt-3 px-6"
          >
          </v-slider>
        </v-row>
        <v-row class="pl-3">
          <v-img
            max-height="50"
            max-width="50"
            src="@/assets/stamp_b.png"
          ></v-img>
          <v-slider
            v-model="num_b"
            color="primary" track-color="grey"
            ticks="always" tick-size="7"
            thumb-label="always" :thumb-size="24"
            min="0" max="2"
            class="pt-3 px-6"
          >
          </v-slider>
        </v-row>
      </v-card-text>

      <v-card-actions class="justify-end pt-4">
        <v-btn
          color="primary lighten-2"
          text
          @click="close"
        >
          キャンセル
        </v-btn>
        <v-btn
          color="primary lighten-1"
          text
          @click="register"
        >
          更新
        </v-btn>
      </v-card-actions>
    </v-card>
    <Confirm ref="confirm"></Confirm>
  </v-dialog>
</template>

<script>
import Confirm from '@/components/Confirm.vue'

export default {
  name: 'StoryKokoroEdit',

  components: {
    Confirm
  },

  data() {
    return {
      show_dialog: false,
      monster: {
        image_path: "",
        name: "",
        monster_level: "",
        is_rain: false,
        is_night: false,
      },
      user: 0,
      num_s: 0,
      num_a: 0,
      num_b: 0,
      initial_num_s: 0,
      initial_num_a: 0,
      initial_num_b: 0,
    }
  },

  methods: {
    get_monster_level(level) {
      switch (level) {
        case 1: return "とてもよく見かける"
        case 2: return "よく見かける"
        case 3: return "ときどき見かける"
        case 4: return "あまり見かけない"
        case 5: return "めったに見かけない"
        case 6: return "メタル系（あまり見かけない）"
        default: return ""
      }
    },

    open(monster, user) {
      this.show_dialog = true
      this.$emit('child_snackbar', false)
      this.monster = monster
      this.user = user
      switch (user) {
        case 2:
          this.num_s = monster.s_aheshiyu
          this.num_a = monster.a_aheshiyu
          this.num_b = monster.b_aheshiyu
          break
        case 3:
          this.num_s = monster.s_mikyan
          this.num_a = monster.a_mikyan
          this.num_b = monster.b_mikyan
          break          
      }
      this.initial_num_s = this.num_s
      this.initial_num_a = this.num_a
      this.initial_num_b = this.num_b
    },

    is_change() {
      let result = false
      if ((this.num_s != this.initial_num_s) || 
          (this.num_a != this.initial_num_a) || 
          (this.num_b != this.initial_num_b)) {
        result = true
      }
      return result
    },

    async close() {
      if (this.is_change()) {
        if (await this.$refs.confirm.confirm('本当にキャンセルしますか？', 'こころの数が変更されています。')) {
          this.show_dialog = false
        }
      } else {
        this.show_dialog = false
      }
    },

    async register() {
      this.$emit('child_snackbar', true)
      if (this.is_change()) {
        switch (this.user) {
          case 2:
            this.monster.s_aheshiyu = this.num_s
            this.monster.a_aheshiyu = this.num_a
            this.monster.b_aheshiyu = this.num_b
            break
          case 3:
            this.monster.s_mikyan = this.num_s
            this.monster.a_mikyan = this.num_a
            this.monster.b_mikyan = this.num_b
            break
          default:
            break
        }
        await this.$gas.update_story(''+this.user, this.monster)  // ユーザIDは文字列に変更（GAS内の処理のため）
      }
      this.show_dialog = false
    },
  }
}
</script>