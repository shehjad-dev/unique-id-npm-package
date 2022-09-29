# Get a Unique Id

The one stop solution to get a uniqe id for your use case. Play with it and integrate for your particular use case. Good luck!

## Use case example in a React Application

```javascript
import React, { useStatem, useEffect } from "react";
import getUID from "get-a-uid";

function App() {
    const [uniqueId, setUniqueId] = useState("");

    useEffect(() => {
        const result = getUID();
        setUniqueId(result);
    }, []);

    return (
        <>
            <p>{uniqueId}</p>
        </>
    );
}
```

## Thanks to the wonderful people who shared their knwowledge

-   [Simon Heiberg](https://twitter.com/SimonHoiberg)
-   [Rahman Fadhil](https://dev.to/rahmanfadhil)

---

[3PointDev](https://threpointdev.com) Signing Out 🤘

---
