## Session 1- Assignment Questions

### Why is React Named React?

As discussed in one of the React conference : https://www.youtube.com/watch?v=dpw9EHDh2bM&t=3455s , React has interpretation of atoms and chemical reactions, It has a logo of an atom, which takes part in chemical Reactions, so react similarly works in a way that each page can be divided into units called components which can react to user actions.

### React is a Library and not a Framework

### What is Emmet?
- Emmet comes as an in-bulit feature for vscode, no additional extension is required.
- It allows to right short abbreviations, which gets converted into code on hitting enter.
- For example if you create a file with `.html` extension. Within the file you can just type `doc` and hit enter. The code gets autocompleted, in the form of template like this:

```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

### What is CDN?
- CDN stands for Content Delvery Network, 
- As the name suggests, it distributes the servers for higher reponse rate. 
- We have one main server in a particular location. Other regional servers are connected to this main servers. 
- Users can connect to the regional server itself to get the application, saving the time. 
- Regional servers stores cache of the main file servers. 
- The refresh rate and other configurations of CDN cn be decided by the host.
- This setup decreases latency, and increases security, as users are not allowed to connect directlty to the main server.

Refer this for clear Explanation : https://youtu.be/b2scqJYSFf0

### What is crossorigin attribute while adding external scripts?
- Usually the resources of a web application are stored in some severs.
- The web application requests these resources (video,audio,image, style sheets,scripts etc) form those servers.
- crossorigin attribute sets the mode of the request to an HTTP CORS Request. This  HTTP CORS Request helps in fetching the resources present in other servers.
