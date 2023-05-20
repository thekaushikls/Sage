# &lt;Archive&gt; Zettelkasten


```py title="sample_circle.py" linenums="1"
import Rhino

def create_circle(origin, radius=10):
    plane = Rhino.Geometry.Plane.WorldXY
    plane.Origin = origin # Relocating world plane to input location
    circle = Rhino.Geometry.Circle(plane, radius)
    return circle
```
