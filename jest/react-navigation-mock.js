// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
import {jest} from '@jest/globals';

jest.mock('react-native/src/private/animated/NativeAnimatedHelper.js');
