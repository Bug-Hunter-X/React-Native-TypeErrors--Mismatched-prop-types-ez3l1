The solution involves using TypeScript or PropTypes to clearly define the expected type for each prop and ensuring data consistency.  For example, adding a prop type definition can catch type errors during development:

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ count }) => {
  if (typeof count !== 'number') {
    console.error('count prop must be a number!');
    return null; // Or handle the error appropriately
  }
  return <Text>{count}</Text>;
};

MyComponent.propTypes = {
  count: PropTypes.number.isRequired,
};

export default MyComponent;
```
Alternatively, using TypeScript provides compile-time type checking:

```typescript
import React from 'react';

interface MyComponentProps {
  count: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ count }) => {
  return <Text>{count}</Text>;
};

export default MyComponent;
```