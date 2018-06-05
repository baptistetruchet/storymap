class Zone < ApplicationRecord
  has_many :event_zones, dependent: :destroy
  has_many :events, through: :event_zones;
end

# {"type":"MultiPolygon","coordinates":[[[[14.191,-5.876],[14.399,-5.893],[14.658,-5.889],[14.749,-5.88],[15.089,-5.874],[15.425,-5.869],[15.727,-5.864],[16.06,-5.865],[16.315,-5.866],[16.431,-5.9],[16.537,-5.966],[16.585,-6.025],[16.608,-6.052],[16.64,-6.115],[16.697,-6.164],[16.718,-6.241],[16.701,-6.346],[16.709,-6.472],[16.743,-6.618],[16.813,-6.773],[16.919,-6.934],[16.966,-7.062],[16.952,-7.157],[16.985,-7.257],[17.064,-7.363],[17.122,-7.419],[17.155,-7.461],[17.245,-7.623],[17.411,-7.882],[17.536,-8.076],[17.58,-8.099],[17.643,-8.091],[17.779,-8.071],[17.913,-8.068],[18.009,-8.108],[18.047,-8.101],[18.191,-8.024],[18.335,-8],[18.485,-7.969],[18.563,-7.936],[18.653,-7.936],[18.898,-7.998],[18.944,-8.001],[19.143,-8.001],[19.341,-7.967],[19.37,-7.707],[19.372,-7.655],[19.419,-7.557],[19.48,-7.472],[19.487,-7.391],[19.484,-7.279],[19.528,-7.144],[19.66,-7.037],[19.875,-6.986],[19.997,-6.976],[20.19,-6.946],[20.482,-6.916],[20.59,-6.92],[20.599,-6.935],[20.537,-7.122],[20.536,-7.183],[20.558,-7.244],[20.608,-7.278],[20.911,-7.281],[21.19,-7.285],[21.511,-7.297],[21.751,-7.305],[21.782,-7.315],[21.806,-7.329],[21.842,-7.421],[21.834,-7.602],[21.78,-7.865],[21.801,-8.112],[21.896,-8.341],[21.905,-8.693],[21.872,-8.903],[21.829,-9.168],[21.813,-9.469],[21.857,-9.594],[21.949,-9.726],[22.089,-9.863],[22.198,-10.041],[22.275,-10.259],[22.302,-10.397],[22.282,-10.453],[22.283,-10.552],[22.307,-10.691],[22.28,-10.784],[22.203,-10.829],[22.178,-10.892],[22.217,-11.013],[22.226,-11.122],[22.257,-11.164],[22.279,-11.194],[22.315,-11.199],[22.393,-11.159],[22.486,-11.087],[22.561,-11.056],[22.667,-11.06],[22.815,-11.08],[23.076,-11.088],[23.157,-11.075],[23.4,-10.976],[23.464,-10.969],[23.56,-10.979],[23.696,-11.008],[23.834,-11.014],[23.901,-10.983],[23.907,-10.943],[23.929,-10.891],[23.966,-10.872],[23.988,-11.003],[24.01,-11.185],[24.026,-11.316],[24.041,-11.374],[24.047,-11.405],[24.029,-11.439],[24.015,-11.518],[23.987,-11.587],[23.971,-11.636],[23.984,-11.725],[23.973,-11.853],[23.962,-11.988],[23.959,-12.118],[23.996,-12.351],[23.991,-12.422],[23.945,-12.544],[23.909,-12.636],[23.887,-12.743],[23.882,-12.799],[23.968,-12.957],[23.963,-12.988],[23.897,-12.998],[23.843,-13.001],[23.636,-13.001],[23.339,-13.001],[23.042,-13.001],[22.744,-13.001],[22.471,-13.001],[22.21,-13.001],[21.979,-13.001],[21.979,-13.157],[21.979,-13.478],[21.979,-13.799],[21.979,-14.12],[21.979,-14.441],[21.979,-14.761],[21.98,-15.082],[21.98,-15.403],[21.98,-15.724],[21.98,-15.956],[22.04,-16.263],[22.151,-16.597],[22.194,-16.628],[22.305,-16.69],[22.459,-16.815],[22.546,-16.91],[22.722,-17.075],[22.956,-17.286],[23.182,-17.474],[23.381,-17.641],[23.068,-17.699],[22.624,-17.782],[22.324,-17.838],[21.961,-17.905],[21.718,-17.948],[21.417,-18.001],[21.369,-17.999],[21.288,-17.963],[21.113,-17.956],[20.908,-18.006],[20.746,-18.02],[20.625,-17.997],[20.508,-17.953],[20.393,-17.887],[20.194,-17.864],[19.912,-17.881],[19.639,-17.869],[19.377,-17.825],[19.189,-17.808],[19.076,-17.818],[18.955,-17.804],[18.826,-17.766],[18.718,-17.703],[18.588,-17.57],[18.487,-17.443],[18.46,-17.425],[18.428,-17.405],[18.396,-17.399],[18.109,-17.396],[17.835,-17.393],[17.679,-17.393],[17.296,-17.392],[16.914,-17.391],[16.531,-17.391],[16.148,-17.39],[15.766,-17.39],[15.383,-17.389],[15.001,-17.389],[14.618,-17.388],[14.415,-17.388],[14.226,-17.398],[14.018,-17.409],[13.987,-17.404],[13.938,-17.389],[13.904,-17.361],[13.792,-17.288],[13.694,-17.234],[13.562,-17.141],[13.476,-17.04],[13.404,-17.008],[13.276,-16.99],[13.179,-16.972],[13.101,-16.968],[12.963,-17.015],[12.859,-17.063],[12.785,-17.108],[12.657,-17.161],[12.548,-17.213],[12.359,-17.206],[12.318,-17.213],[12.213,-17.21],[12.114,-17.165],[12.014,-17.169],[11.903,-17.227],[11.743,-17.249],[11.78,-16.871],[11.819,-16.704],[11.82,-16.504],[11.797,-15.986],[11.769,-15.915],[11.751,-15.832],[11.85,-15.768],[11.9,-15.72],[11.968,-15.634],[12.016,-15.514],[12.073,-15.248],[12.28,-14.638],[12.379,-14.039],[12.504,-13.755],[12.55,-13.438],[12.898,-13.028],[12.983,-12.776],[13.163,-12.652],[13.417,-12.52],[13.598,-12.286],[13.686,-12.124],[13.785,-11.813],[13.784,-11.488],[13.847,-11.054],[13.834,-10.93],[13.739,-10.757],[13.721,-10.634],[13.634,-10.512],[13.539,-10.421],[13.495,-10.257],[13.332,-9.999],[13.287,-9.827],[13.209,-9.703],[13.197,-9.551],[13.156,-9.39],[13.076,-9.23],[12.999,-9.048],[12.999,-8.991],[13.047,-8.922],[13.093,-8.9],[13.077,-8.934],[13.047,-8.975],[13.054,-9.007],[13.359,-8.687],[13.378,-8.625],[13.368,-8.555],[13.366,-8.469],[13.379,-8.37],[13.091,-7.78],[12.862,-7.232],[12.823,-6.955],[12.521,-6.59],[12.402,-6.353],[12.334,-6.187],[12.283,-6.124],[12.303,-6.093],[12.38,-6.084],[12.553,-6.046],[12.791,-6.004],[13.01,-5.908],[13.068,-5.865],[13.184,-5.856],[13.303,-5.882],[13.346,-5.863],[13.372,-5.862],[13.649,-5.862],[13.765,-5.855],[13.979,-5.857],[14.114,-5.865],[14.191,-5.876]]],[[[12.255,-5.746],[12.214,-5.759],[12.199,-5.732],[12.155,-5.633],[12.18,-5.539],[12.207,-5.468],[12.177,-5.325],[12.111,-5.197],[12.04,-5.035],[12.018,-5.004],[12.078,-4.952],[12.167,-4.838],[12.204,-4.779],[12.308,-4.766],[12.347,-4.724],[12.374,-4.658],[12.385,-4.619],[12.501,-4.588],[12.642,-4.531],[12.719,-4.47],[12.798,-4.431],[12.848,-4.429],[12.881,-4.445],[12.971,-4.552],[13.048,-4.619],[13.073,-4.635],[13.057,-4.651],[12.948,-4.695],[12.83,-4.737],[12.675,-4.905],[12.596,-4.978],[12.574,-4.997],[12.503,-5.037],[12.451,-5.072],[12.453,-5.091],[12.487,-5.113],[12.522,-5.149],[12.519,-5.425],[12.504,-5.696],[12.485,-5.719],[12.386,-5.728],[12.255,-5.746]]]]}
