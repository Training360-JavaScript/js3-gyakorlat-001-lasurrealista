# Feladatok

## NAGYON FONTOS!!!
- A könnyebb tesztelhetőség érdekében az elkészített függvényeket és változókat 
exportálni kell!
- Függvények esetén egy példa:
```javascript
export default objectsMerge;
```
- Változók esetén egy példa:
```javascript
export {
  firstName,
  lastName,
  job,
};
```

## 1. Feladat
- Fájl: `solutions/app1.js`
- Függvény neve: `removeDuplicatesFromArray`
- Export: a removeDuplicatesFromArray függvény legyen a default export!
- Írj egy függvény kifejezést, ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket!
- A függvény visszatérési értéke a duplikált elemektől mentes új tömb!

## 2. Feladat
- Fájl: `solutions/app2.js`
- Objektum neve: `HU`
- Export: a HU objektum legyen a default export!
- Készíts egy `HU` nevű objektumot, aminek az alábbi propertijei vannak:
- `date()`: Visszaadja a paraméterként megadott dátumot a magyar dátumírás szabályainak megfelelően.
- `currency()`: Visszaadja a paraméterként megadott számot a magyar pénzformátumnak megfelelően a Ft végződéssel együtt.
- `list()`: A paraméterként kapott string tömböt visszaadja az alábbi formában: első, második és harmadik" (Tehát vesszőkkel elválasztva az utolsó elem előtt az és szóval).
