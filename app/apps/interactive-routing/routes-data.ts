export const data = [
    {
        "title": "Basic Routes",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "_index.tsx",
                    "type": "r",
                    "path": "/",
                    "children": []
                },
                {
                    "name": "playground.tsx",
                    "type": "r",
                    "path": "/playground",
                    "children": []
                },
                {
                    "name": "dockview.tsx",
                    "type": "r",
                    "path": "/dockview",
                    "children": []
                },
                {
                    "name": "about.tsx",
                    "type": "r",
                    "path": "/about",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Design Systems",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "designsys._index.tsx",
                    "type": "r",
                    "path": "/designsys",
                    "children": []
                },
                {
                    "name": "designsys.cloudscape.tsx",
                    "type": "r",
                    "path": "/designsys/cloudscape",
                    "children": []
                },
                {
                    "name": "designsys.antd.tsx",
                    "type": "r",
                    "path": "/designsys/antd",
                    "children": []
                },
                {
                    "name": "designsys.sourcegraph.tsx",
                    "type": "r",
                    "path": "/designsys/sourcegraph",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Inspectors",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "inspectors._index.tsx",
                    "type": "r",
                    "path": "/inspectors",
                    "children": []
                },
                {
                    "name": "inspectors.lab01.tsx",
                    "type": "r",
                    "path": "/inspectors/lab01",
                    "children": []
                },
                {
                    "name": "inspectors.lab02.tsx",
                    "type": "r",
                    "path": "/inspectors/lab02",
                    "children": []
                },
                {
                    "name": "inspectors.tsx",
                    "type": "l",
                    "path": "l",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Dot Delimeters",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "concerts.trending.tsx",
                    "type": "r",
                    "path": "/concerts/trending",
                    "children": []
                },
                {
                    "name": "concerts.salt-lake-city.tsx",
                    "type": "r",
                    "path": "concerts/salt-lake-city",
                    "children": []
                },
                {
                    "name": "concerts.san-diego.tsx",
                    "type": "r",
                    "path": "concerts/san-diego",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Dynamic Segments",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "movies.$movieName.tsx",
                    "type": "r",
                    "path": "movies/avatar",
                    "children": []
                },
                {
                    "name": "movies.trending.tsx",
                    "type": "r",
                    "path": "movies/trending",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Nested Routes",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "actors._index.tsx",
                    "type": "r",
                    "path": "/actors",
                    "children": []
                },
                {
                    "name": "actors.$actorName.tsx",
                    "type": "r",
                    "path": "/actors/morgan-freeman",
                    "children": []
                },
                {
                    "name": "actors.trending.tsx",
                    "type": "r",
                    "path": "/actors/trending",
                    "children": []
                },
                {
                    "name": "actors.tsx",
                    "type": "l",
                    "path": "l",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Nested Without Layout",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "actors._index.tsx",
                    "type": "r",
                    "path": "/actors",
                    "children": []
                },
                {
                    "name": "actors.$actorName.tsx",
                    "type": "r",
                    "path": "/actors/morgan-freeman",
                    "children": []
                },
                {
                    "name": "actors.trending.tsx",
                    "type": "r",
                    "path": "/actors/trending",
                    "children": []
                },
                {
                    "name": "actors.tsx",
                    "type": "l",
                    "path": "",
                    "children": []
                },
                {
                    "name": "actors_.favourites.tsx",
                    "type": "r",
                    "path": "actors/favourites",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Pathless Routes",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "_auth.login.tsx",
                    "type": "r",
                    "path": "/login",
                    "children": []
                },
                {
                    "name": "_auth.register.tsx",
                    "type": "r",
                    "path": "/register",
                    "children": []
                },
                {
                    "name": "_auth.tsx",
                    "type": "l",
                    "path": "",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Optional Segments",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "products.($lang)._index.tsx",
                    "type": "r",
                    "path": "/products/fr",
                    "children": []
                },
                {
                    "name": "products.($lang).$productId.tsx",
                    "type": "r",
                    "path": "/products/en/american-flag-speedo",
                    "children": []
                },
                {
                    "name": "products.($lang).categories.tsx",
                    "type": "r",
                    "path": "/products/fr/categories",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Splat Routes",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "files.$.tsx",
                    "type": "r",
                    "path": "/files",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Special Characters",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": [
                {
                    "name": "sitemap[.]xml.tsx",
                    "type": "r",
                    "path": "/sitemap.xml",
                    "children": []
                },
                {
                    "name": "[sitemap2.xml].tsx",
                    "type": "r",
                    "path": "/sitemap2.xml",
                    "children": []
                },
                {
                    "name": "weird-url.[_index].tsx",
                    "type": "r",
                    "path": "/weird-url/_index",
                    "children": []
                },
                {
                    "name": "dolla-bills-[$].tsx",
                    "type": "r",
                    "path": "/dolla-bills-$",
                    "children": []
                },
                {
                    "name": "[[so-weird]].tsx",
                    "type": "r",
                    "path": "/[so-weird]",
                    "children": []
                }
            ]
        }
    },
    {
        "title": "Folder Orgnanization",
        "tree": {
            "name": "routes",
            "type": "f",
            "path": "",
            "children": []
        }
    }
] as any;
