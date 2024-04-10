<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="appSectionBgColor">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleLeftDrawer" />
        <q-space></q-space>
        <q-btn dense icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>
    <!-- prettier-ignore -->
    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-toolbar class="q-ma-sm">
        <q-toolbar-title>{{ appName }}</q-toolbar-title>
        <q-btn dense flat icon="close" @click="toggleLeftDrawer" class="q-mx-sm" />
      </q-toolbar>
      <q-list>
        <MenuLink
          v-for="link in appSectionMenuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <!-- prettier-ignore -->
    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <q-toolbar class="q-ma-sm">
        <q-toolbar-title>Авторизация</q-toolbar-title>
        <q-btn dense flat icon="close" @click="toggleRightDrawer" class="q-mx-sm" />
      </q-toolbar>
      <q-list>
        <MenuLink
          v-for="link in profileMenuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container class="my-layout">
      <router-view />
    </q-page-container>
    <!-- prettier-ignore -->
    <footer class="q-pa-lg q-mt-lg">
      <q-toolbar class="justify-center my-layout">
        <div class="footer-logo column items-center">
          <span class="app-section-name" :class="appSectionTextColor">{{ appName }}</span>
          <q-img src="~/assets/tops-and-roots_logo_001.svg" width="100px" height="100px" :alt="appName" class="q-my-md q-mx-xl flash" />
          <!--<small class="app-name">{{ appName }}</small>-->
          <small class="copyrights">Версия {{ appVersion }}, {{ currentYear() }} &copy;</small>
        </div>
      </q-toolbar>
    </footer>
  </q-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import { appSectionMenuLinks, profileMenuLinks } from "src/router/menu";
import MenuLink from "components/MenuLink.vue";
import { useMeta } from "quasar";

/**
 * Флаги состояния левой и правой панели меню.
 */
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

/**
 * Переключатели состояния левой и правой панели меню.
 * @returns {boolean}
 */
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const toggleRightDrawer = () => (rightDrawerOpen.value = !rightDrawerOpen.value);

/**
 * Константы.
 */
const appName = process.env.appName; // Имя приложения
const appVersion = process.env.appVersion; // Версия приложения
const currentYear = () => new Date().getFullYear(); // Текущий год

/**
 * Название и цвет раздела.
 */
const appSectionName = ref("Пользователь");
const appSectionColor = ref("blue-grey-7");

/**
 * Формирование классов для фона и текста,
 * исходя из текущего цвета раздела.
 */
const appSectionBgColor = computed(() => "bg-" + appSectionColor.value);
const appSectionTextColor = computed(() => "text-" + appSectionColor.value);

/**
 * Установка заголовка страницы.
 */
useMeta({
  title: appName,
  titleTemplate: (title) => `${title} - ${appSectionName.value}`,
});
</script>

<style lang="sass" scoped>
@import "src/css/quasar.variables.scss"

main
  font-size: 17px // vs. default body font-size: 14px

footer
  background-color: #fafafa
  border-top: var(--normal-border)
  .footer-logo
    background-color: whitesmoke
    border-radius: 100%
    padding: 36px
    small, span
      display: block
    .app-section-name, .app-name
      font-weight: 900
      text-transform: uppercase
    .copyrights
      font-weight: 400

.my-layout
  max-width: $layout-max-width
  margin: 0 auto

.tabs-margin
  margin: auto 12px

@keyframes flash
  0%
    opacity: 1
  50%
    opacity: 0.6
  100%
    opacity: 1

.flash
  cursor: pointer
  opacity: 0.6

  &:hover
    animation: flash 0.7s ease-in-out infinite
</style>