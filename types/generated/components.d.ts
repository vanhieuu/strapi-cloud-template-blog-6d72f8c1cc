import type { Schema, Struct } from '@strapi/strapi';

export interface AndroidBundleAndroidBundle extends Struct.ComponentSchema {
  collectionName: 'components_android_bundle_android_bundles';
  info: {
    displayName: 'downloadAndroidUrl';
    icon: 'code';
  };
  attributes: {
    androidBundle: Schema.Attribute.String;
    bundle: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface AndroidBundleAndroidDownloadBundle
  extends Struct.ComponentSchema {
  collectionName: 'components_android_bundle_android_download_bundles';
  info: {
    displayName: 'downloadIosUrl';
  };
  attributes: {
    bundle: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    iosBundle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'android-bundle.android-bundle': AndroidBundleAndroidBundle;
      'android-bundle.android-download-bundle': AndroidBundleAndroidDownloadBundle;
    }
  }
}
