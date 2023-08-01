all components inside the App Router are Server Components by default, including special files and colocated components. This allows you to automatically adopt them with no extra work, and achieve great performance out of the box. You can also optionally opt-in to Client Components using the 'use client' directive.

### Client Component
```
'use client'
 
import { useState } from 'react'
 
export default function Counter() {
  const [count, setCount] = useState(0)
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

[Reference to how components are used  in Nextjs](https://nextjs.org/docs/getting-started/react-essentials)