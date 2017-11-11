/**
 * Configuration du système pour les échantillons angulaires
  * Ajustez si nécessaire pour vos besoins d'application.
 */
(function (global) {
  System.config({
    paths: {
      // paths servent alias 
      'npm:': 'node_modules/'
    },
    // carte indique au chargeur du système où chercher des choses du framwork
    map: {
      // notre application est dans le dossier de l'application *app*
      app: 'app',
      // angular bundles or faisceaux angulaires
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/router/upgrade': 'npm:@angular/router/bundles/router-upgrade.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
      // Autre libreries
      'rxjs':                       'npm:rxjs',
    },
    // packages indique au chargeur système comment charger quand aucun nom de fichier et / ou aucune extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
