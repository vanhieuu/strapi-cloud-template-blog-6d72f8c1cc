import type { Schema, Struct } from '@strapi/strapi';

export interface AndroidBundleAndroidBundle extends Struct.ComponentSchema {
  collectionName: 'components_android_bundle_android_bundles';
  info: {
    displayName: 'androidBundle';
    icon: 'code';
  };
  attributes: {
    androidBundle: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'android-bundle.android-bundle': AndroidBundleAndroidBundle;
    }
  }
}
