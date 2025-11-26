import React from "react";

export const TrustBadge = ({ className }: { className?: string }) => {
    return (
        <svg
            width="80"
            height="42"
            viewBox="0 0 80 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={className}
        >
            <rect width="79.153" height="41.9996" fill="url(#pattern0_4_76)" />
            <defs>
                <pattern
                    id="pattern0_4_76"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0_4_76"
                        transform="scale(0.00291545 0.00549451)"
                    />
                </pattern>
                <image
                    id="image0_4_76"
                    width="343"
                    height="182"
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAAC2CAYAAABtXs6LAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABV6ADAAQAAAABAAAAtgAAAABZtLSaAABAAElEQVR4AeydB2CeV3X+j/betoZteW8ndhIyIIOEhCQkgZQRymgpZZTVltUAhTKahkJbKLNAodACLS0lYSaQAUnIniRxbMd7D1mStbc+jf/vOe97P336LNmy4+QfU13707vuHs8999xzzs3Y29i7t7m5ubS0pNQyMjJsODFkkRuJr/ElI+15/NfDnkYyolfhOhqiia+ZGZl+lxF/UNpy4Xk0Dh+uIZ7MEJH75s/I+BeTho/9R6mSTlp66c8h3XAdiQNmplfDVNOPy5Oe/0yLP8T5mzT/x5h+qJ7DrmntOL72DvM9wYu43eL6C/Vjcf5CPU4QcMJXo6PHnoMJI5p+OV0Dz6caGLXO7L6evjn8LCcrxwEnMZQgiwFBwpVXaYPyaOUIgy7EkA6OGZkRqASwCYMyHVxCuBBf+B7SzzgKuCXDxwEClIX00tMPzyFcuD7j9OOE0/OflQauJyr9UD9Hu4ZyHc3f2PdMG43rXMCo+kkFyMxMposYeMfCTH6XGnZyX9NfpmvgpKuB0mxGRifZLh3LehIOUwCVd0lwDd/HQkx4l0SxtK/J9+Em/p4+IMPn9GtadElS97D3Id60ayCUDksvJJTmP7wO18PSCRGmfQj+069p3qjYw974i/A6/ZruOx2t078nn2PS0p9T74OH8C5cw/vDr5lZkZ8MVh8C5wCmuob7w0NN/GYaXCeul+m3J3kNiHItKC6ywr5eKywq9IExlMiKSuVgGgNp6n2Sqj1y4QPFF64+CFNw6DC2QBolmwwXJxOeA2WXTD2Ncg3QEKaAQJmlhw8gELArMwbbgFXp4UJ8If5J04/LGNILRQ7P6fnPSgP5E5V+Mn+6GU3NdbiPrlG5wjt5ju8JMzKiVQwuObFGj+P+QqnKjYyO2MjwiFOxIyPc8zwVF6jgqfid9jNdAydLDYzaqGUnBgctkUjwG7AIYASuwwBttg0ND8ZLQCdP4nJF4JtOcaQPkgAmAaRCpQTwYMSHV/E1eg7gkx4+PIfvycAM5FQXvgf/4RryEdI/DNxjkAswE2IN4UI8If5kmungng6uMXpPFj6d53qi0k/mz29UmvSYY1D099F3tWkGQJoFYGZla3mfSzjx4PGbBrCjMXgODw97Cgob+oQmrqyMeJL2r5P/ycgK09vkfqa/TNfASVcD4EB2lOkAJXoaNggQy2VwdbX1WXGROAYMrhRKxJd/vBXfVCCVpAJTqLAAJgGcFLNcALfo6fC/AbzSw4ccBohIhjwauMUeQ3wh/sDzDfk5KuUaY0AIP+X0A7jGAdLzn85zDfkJ9RbyHa5TTT+Zv3E36amLuz72ThPt4CBgKmDl36glaGMBLj0lDVxDtAFQw/P0dboGpmsgqgHANYYtDR7AURSrgFWDbP68hRFHMKbGQqWFDV7hreiW5HOaP/kPoBDCHgYO4UN8nRRc4u9jUBC/CKgbvsd5COmGLIXnkH4srGDJ5xgEJ0s/gF34Hid3GOaE78F/SDdkMz3/6fTdZOFDfOH70dIP30O48HzEa36hZdMjOjoTNjDYYzk52TaSOQTIhlo8Yujpj9M1MF0DKTUQUa5OlWj4ZzgrQBSrgPU/v/dj27enHYTU8nC8C5RfEjRinul4X0noTr5OB5fkh/gmgEcAhRB/AKkAhslw6ZRr/CGES8aTRnkGajvkJzwfln4cLsBL/JhM/qjSCiE/aemHCKbKcz3W9EP8ofyHt0TwoWtcW/SDRGLQXv6Ky+3UNfNt/4H9VlBM23ulhBxE4UJ9pcYyfT9dA9M1MFYDMVtg7IV4p2IFCAsErP/13V9Zbc0C6+/vs+wsKJk0dJlsWRj8BTBMfw4pBjALz+EaQCGEC8/p/tOX1enpHS38UcExLu/Jmn6oz1AP4Tm0W1R+bUQBsBmD1jfYai+5+CVWXGZWl1lrbW0tBIF2DbNQiCCmZjPCsiX5XgugtE6S8m36droG/q/UwBi4xmwBUa8Rj5ULFKuAta56IeDazyZH1uHgmkY5hopLB6P05+DvsDEbfzga5ZkMnzaQ08E10FsBXML3ED5dCSHk5/cl/VDOUA/J5wCKcfuNisEDuLZ35lheboENDJgD6+go7wk8mjarTQNoqMnp63QNTFwD2eYqR4IS/QBWgVXK5pUoVgFrH79sgWtaPNA8aW/GP4YxOSm4ThI8gGEIF57TwVFbL6nuWMHxMHCN8xPS+31JX3WkMoX6C5TrSAyyDqKAa15egUmOVUIAAyBsdh7zLxOvb3Cpe6S1V6in0AYh/vA8fZ2ugf+rNTBGuU5SA2IFiGIVsGZxn85aHT4KuIbBljqwU5NKH6zhW0gnDN4AoQE8g790tkCILz18eA7fQ/jJ2ALB/+9L+pokVHeh/AFcM5OUqz5mWQ/aekMJieKZ5efn29BopA4dJplQb9PX6RqYroEj10AKuMaUq43fvxa4+I940gFHUYuiOZILXz1WHsLgDmGmuhOdDqoh/FSv6elONVzwd7KnH8oRrsllfVwwJFMdXDWBDg0xZUKhZiM6MBTbmghyzCFcAOcQ3/T12aqBsFZ8pj3w2crfdLyT1cAxt1ig5CaLcPr9yV8DAs4RydhNuynUgIbQRMNosvdTiDLpJQBr8sX0zUlUAymU60mU6+msptRA2gAMS4UUH9HtRABwmKdn4cXR0k3L/7OQg2cvSsoWxCi83kNZJns/UU5Swvjn8DyR3+l3J1MNPKvgGvitJ1OFnEx59fqdFExPppKcTHlNmSwcWPUsQAy/UJYwtNLfh++p1xAnfl3mPOVbAO+UV9O3J0cNZIuXpmWgLwXJs/PUtJvhky8qkPqGH0kFaPMq6OSH4h0RQBVN2u5yOot2eBJwCK8DBziwIw6LL2QkvqZvvAT/k4ZPE+UK+Xv+pq/BGjsymTHZ4AsFSMp3hHDRQFa7prrIVgBSAdRH9Iv6QrI/xPEF3msI69/Dg19TgMKfQ7rBU/gePYd2SVKAwdsUr5iXmaLPib0l0z/sc3q8PiDwpfyHMsRX1Y2LMsa2kEcDsIb3qXGF+yhs5kiKX7xHLvjhSXFP1sax7+nL87MGJmrZ52dOp3MV10AY2KkVMtE7fdcg1beUwarX/1/d8ykvx1IR5NuBLoShXpNUpr6pXHHZdO9SFqHu4/fhewDnQPnqmhpXSGL6elLXwDS4npTNp0Gb4iajbAIY6PqcuQAkSjD1/kgZSAWX2N9kZTpSNCf0W2odx+XIgDINdZnMn/zpe2pZuZdfOb+mftNLwii8KFz/xXHIr957GulhFG7anUw1MA2uJ1NreV41ENNckurhfTzoMxjsWvj7sOWdPzNocxCvGsTE5AhaAjJ2nXQBNJIvxt9IlC2d5TLeB9+dvWTIQ0usS/Zd032kP6ekH38SmyGdZZEe6nnx7NRpJsZtxLjKwiYDl9R2SLlXeSL2CeUNgCqDdElgJWxQ3FE7cO8WycSyituTt9PuJKuBo4KreFJhUGkuTR8O6TyrwOM80fXwTOP9fQjvg5SC5OTkYLUsssOrcmUCZunlU7tk834U4eThoSH0AzKtt6vbGttUe/t93J8g+pzvWv9AXl9uU9ZC5O5hS+h38cHxvkdjlaN3l/nmWlZoZksLDmMitIP4ZDnYVBu/PVbGP+S4MdqHHA5sEvB11RWxhq1riukP669vUvufdrMLIlRmzm+90CHfLWW8d4EtwX+wcDO8elau7u1HF8Zb9Ms/PfRZxh08+XB2POIdlupDyBLstsy4Uc/+Rj+TWkfpRKPxawZ4bD7DHYo5Wi9z7aL70YXycTfS44tSbw39vLm5vB3guPydeHzjjN0EHg5Vm/l6mUBesOrDyJvAvCR6ExRN7IGvw/y9taWy2/kfAX+B3gmY8ubuJf7ifB8e0LJnlsaonMbGyPLepORD+6NV9tUImynNr/hsU2jPzUK38wu+yyz96IDCzuG5yImNIVHjstVfGSelH3hiKEWw3M/D7vAOgPacRh06+7d/34jUx9twXsVsB9A2wntcJ4LGcNzNmArYrH4+Tt2NLRk8nk9F0e6kfGnCB08FMWCWRchQ5xtN5viamiup53IwX/EIImwXV36bOa0FMdAtoUDWeeYsdFHvlTczNhEncxfq8jXBb6sXArNLBTg05tyeM4SXmpxNnkRmQwvb599K3zheBD+lT7XD0pKas40EhbUlj1RfPIJzxcU9y8WnT5hxOvPnXPtHiPX1KlwagD9rO3y8knn82nGyycwjtvR4W7ZtatJIlKPhV0/moOhggXh2O/YaN5GOf7uIDLMY7FexEhTRAC/GuFDvhpvhOFIu3u7mDV0ppaXm3B4WCUyhiO3mx0vOU1G2De0R7OWD+wFBeGqtEz7IM5STz8vJ+d+bjjfbcuxB3msw0V4vfdSkpY30Oq3BQj3d8p/IOGQGclvvwUPCPifWeCoHKn/M+0HBj7uLDDgcMfdkh3fCg843PG9fsed9gMOd9wt2fGt8H8BXjmGOA83l18AAAAASUVORK5CYII="
                />
            </defs>
        </svg>
    );
};
