import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-plugin',
  templateUrl: './side-plugin.component.html',
  styleUrl: './side-plugin.component.scss'
})
export class SidePluginComponent implements OnInit{


  pluginList: any[];

  constructor(private router: Router) {}


  data = [
    {
      "pluginId": 1,
      "pluginName": "Plugin A",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        }
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [

        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    },
    {
      "pluginId": 2,
      "pluginName": "Plugin B",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        }
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    },
    {
      "pluginId": 3,
      "pluginName": "Plugin C",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        }
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    },
    {
      "pluginId": 4,
      "pluginName": "Plugin D",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        }
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    },

    {
      "pluginId": 5,
      "pluginName": "Plugin E",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        }
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    },
    {
      "pluginId": 6,
      "pluginName": "Plugin F",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        }
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    },
    {
      "pluginId": 7,
      "pluginName": "Plugin G",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        }
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    },
    {
      "pluginId": 8,
      "pluginName": "Plugin H",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        }
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    },
    {
      "pluginId": 9,
      "pluginName": "Plugin I",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        } 
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    } 
    ,
    {
      "pluginId": 10,
      "pluginName": "Plugin J",
      "CI": [
        {
          "category": "Version Control",
          "image": "assets/png/Github.png",
          "service": "GitHub",
          "version": "1.1",
          "shared": 0
        } ,
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        } 
        ,
        {
          "category": "CI",
          "image": "assets/png/Maven.png",
          "service": "Maven",
          "version": "1.1",
          "shared": 0
        } 
      ],
      "CD": [
        {
          "category": "CI",
          "image": "assets/png/Microsoft-Azure-DevOps.png",
          "service": "Azure DevOps",
          "version": "1.1",
          "shared": 0
        },
        {
          "category": "CD",
          "image": "assets/png/selenium.png",
          "service": "Selenium",
          "version": "1.1",
          "shared": 0
        }
      ],
      "cloud": [
        {
          "category": "Cloud Platform",
          "image": "assets/png/Azure Container Apps.png",
          "service": "AWS",
          "version": "1.1",
          "shared": 0
        }
      ]
    }
    
    
  ];
  


  ngOnInit(): void {
    this.pluginList = this.data;
  }


  
viewDetails(id: number){ 
  this.router.navigate(['/plugin-details', id]);
  }

  create() {
    // throw new Error('Method not implemented.');
    this.router.navigate(['/side-plugin-create']);
  
    }
}
