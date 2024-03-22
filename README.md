# Experimental Repository for React Native and Web Applications

This experimental repository contains a React Native application that shares business logic and components with other React web applications. The goal is to enable code reusability and maintainability across multiple projects.

## Structure

The repository is structured as follows:

```
.
├── ReactNativeApp
│   ├── app
│   │   ├── Shared
│   │   │   ├── components
│   │   │   ├── utils
│   │   │   └── ...
│   │   ├── src
│   │   └── ...
│   └── ...
├── ReactWebApp1
│   ├── src
│   └── ...
└── ReactWebApp2
    ├── src
    └── ...
```

The `Shared` folder is located inside the `app` folder of the React Native application and contains all the common code, including components and utilities, which can be used by the React Native application and the React web applications. Each application has its own folder and can access the shared code by creating symbolic links.

## Setting up the mono repo

You can configure the build of your React applications using different tools like Webpack, Create React App (CRA), or Parcel. The mono repo setup will slightly differ based on the tool you choose.

### Creating symbolic links

Before accessing the shared folder in any of the web applications, you need to create symbolic links. To do this, follow the steps below:

1. Navigate to the `src` folder of the web application you want to link to the shared folder.
2. Run the following command to create a symbolic link:

   ```
   ln -s ../../ReactNativeApp/app/Shared ./Shared
   ```

   This will create a link named `Shared` in the `src` folder of the web application, which points to the actual `Shared` folder in the `app` folder of the React Native application.

3. Repeat the process for all other web applications that need to access the shared folder.

## Usage

After setting up the symbolic links, you can now import and use the shared components and utilities in your web applications like this:

```javascript
import { SharedComponent } from './Shared/components/SharedComponent';
import { sharedUtility } from './Shared/utils/sharedUtility';

// Use the shared component and utility in your application
```

## Contributing

Please follow the repository's coding standards and guidelines when contributing to the shared code. This will ensure consistency and maintainability across the entire codebase.

## License

This experimental repository is licensed under the [MIT License](./LICENSE).

## Acknowledgements

This repository is an experimental project aimed at exploring the possibilities of sharing code between React Native and web applications. Your feedback and contributions are highly appreciated.