/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
    Actor,
    AnimationEaseCurves,
    AnimationKeyframe,
    AnimationWrapMode,
    ButtonBehavior,
    Context,
    Quaternion,
    TextAnchorLocation,
    Vector3,
    ColliderGeometry,
    Collider,
    User,
    ScaledTransform,
} from '@microsoft/mixed-reality-extension-sdk';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import * as MRESDK from '@microsoft/mixed-reality-extension-sdk';

/**
 * The main class of this app. All the logic goes here.
 */
export default class HelloWorld {
    [x: string]: any;
    private text: Actor = null;
    private cube: Actor = null;
    constructor(private context: Context, private baseUrl: string) {
        this.context.onStarted(() => this.started());
    }
    /**
     * Once the context is "started", initialize the app.
     */
    private started() {
        // Create a new actor with no mesh, but some text. This operation is asynchronous, so
        // it returns a "forward" promise (a special promise, as we'll see later).
        const textPromise = Actor.CreateEmpty(this.context, {
            actor: {
                name: 'Text',
                transform: {
                },
                text: {
                    contents: "",
                    anchor: TextAnchorLocation.MiddleCenter,
                    color: { r: 213 / 255, g: 0 / 255, b: 213 / 255 },
                    height: 0
                }
            }
        });

        // AltspaceVR resource IDs from https://account.altvr.com/kits/
        const libraryActors: MRE.Actor[] = [];
        libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
            resourceId: "artifact: 1268209511420658610",
            actor: {
                name: 'P4ndam4sk 02',
                transform: {                                
                    local: {
                    position: { x: 6.4, y: 0.0, z: -5.3 },
                    scale: { x: 0.55, y: 0.55, z: 0.55 }
                }
            }
        }
        }));
        // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
        // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
        libraryActors.forEach((actor: MRE.Actor) => {
			if (actor) {
				const buttonBehavior = actor.setBehavior(MRE.ButtonBehavior);

                // Trigger the grow/shrink animations on hover.
                  //@ts-ignore
                  buttonBehavior.onClick((user: User) => {       		const libraryActors: MRE.Actor[] = [];
                    libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1268209511420658610",
                        actor: {
                            name: 'P4ndam4sk 02',
                            transform: {                                
                                local: {
                                position: { x: -6.45, y: 2.95, z: -1.8 },
                                scale: { x: 0.7, y: 0.7, z: 0.7 }
                                }
                            }
                        }
                    }));
                    
        // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
        // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
        libraryActors.forEach((actor: MRE.Actor) => {
			if (actor) {
                const buttonBehavior = actor.setBehavior(MRE.ButtonBehavior);
                
                // Trigger the grow/shrink animations on hover.
                  //@ts-ignore
                  buttonBehavior.onClick((user: User) => {       		const libraryActors: MRE.Actor[] = [];
                    libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                        resourceId: "artifact: 1268209511420658610",
                        actor: {
                            name: 'P4ndam4sk 02',
                            transform: {                                
                                local: {
                                position: { x: -0.15, y: 4.3, z: -14.3 },
                                scale: { x: 0.5, y: 0.5, z: 0.5 }
                                }
                            }
                        }
                    }));
 // Set up cursor interaction. We add the input behavior ButtonBehavior to the cube.
        // Button behaviors have two pairs of events: hover start/stop, and click start/stop.
        libraryActors.forEach((actor: MRE.Actor) => {
			if (actor) {
                const buttonBehavior = actor.setBehavior(MRE.ButtonBehavior);
    
// Trigger the grow/shrink animations on hover.
                  //@ts-ignore
                  buttonBehavior.onClick((user: User) => {       		const libraryActors: MRE.Actor[] = [];
                    libraryActors.push(MRE.Actor.CreateFromLibrary(this.context, {
                    resourceId: "teleporter:space/1148791394312127008?label=false",
                    actor: {
                        name: 'Teleporter',
                        transform: {
                            local: {
                                position: { x: 0, y: -10, z: 0 },
                                scale: { x: 100, y: 100, z: 100 }
                            }
                        }
                    }
                }));
            })
        }
    })
})
            }
        })
    })
}
        })
    }
}