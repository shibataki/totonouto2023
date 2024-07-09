import React, { ComponentType, lazy } from 'react'

const lazyImport = (factory: () => Promise<{ default: ComponentType<any> }>) =>
	lazy(async () => {
		try {
			return await factory()
		} catch (e) {
			return {
				default: () => (
					<>
						<p>Error occurred</p>
						<button onClick={() => window.location.reload()}>Reload</button>
					</>
				),
			}
		}
	})

export default lazyImport
